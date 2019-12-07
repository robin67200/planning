import { MatiereService } from './../../matiere/services/matiere.service';
import { ProfService } from './../../prof/services/prof.service';
import { Matiere } from './../../matiere/models/matiere';
import { Cours } from './../models/cours';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import {startOfDay, endOfDay, subDays,
        addDays, endOfMonth, isSameDay,
        isSameMonth, addHours} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
  CalendarViewPeriod,
  CalendarWeekViewBeforeRenderEvent,
  CalendarMonthViewBeforeRenderEvent,
  CalendarDayViewBeforeRenderEvent
} from 'angular-calendar';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'; // to register french
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { CoursService, CoursService2 } from '../services/cours.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Prof } from '../../prof/models/prof';
import { AlertifyService } from '../../_services/alertify.service';

registerLocaleData(localeFr);

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  locale = 'fr';
  courss: Cours[];
  bsModalRef: BsModalRef;
  cours: any;
  profs: Prof[] = [];
  matieres: Matiere[] = [];

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-edit"></i>',
      a11yLabel: 'Edit',
      onClick: (): void => {
        this.openCours(this.cours);
        this.ngOnInit();
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: (): void => {
        console.log('Clique');
        this.deleteCours(this.cours);
        this.ngOnInit();
      }
    }
  ];

  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = [];

  period: CalendarViewPeriod;
  activeDayIsOpen = false;
  form: FormGroup;

  constructor(
    private modal: NgbModal,
    private service: CoursService,
    private modalService: BsModalService,
    private service2: CoursService2,
    private modals: SimpleModalService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private profService: ProfService,
    private matiereService: MatiereService,
    private alertify: AlertifyService

    ) {}

    ngOnInit() {
      this.service.getCours().subscribe(courss => {
        this.events = courss.map(cours => {
          return {
            id: cours.id,
            start: new Date(cours.start),
            end: new Date(cours.end),
            title: cours.title,
            room: cours.room,
            actions: this.actions,
            color: {
              primary: cours.color,
              secondary: cours.color2
            },
            professeurId: cours.professeurId,
            matiereId: cours.matiereId,
          };
        });
        this.profService.getProf().subscribe(profs => {
          this.profs = profs;
          this.matiereService.getMatiere().subscribe(matieres => {
            this.matieres = matieres;
            this.courss.forEach(c => {
              const prof = this.profs.find(n => n.id === c.professeurId);
              c.profName = prof.nom;
              const matiere = this.matieres.find(a => a.id === c.matiereId);
              c.matiereName = matiere.nom;
            });
          });
        });
      }, err => {
          console.log(err);
      });
      this.service.getCours().subscribe(res => {
        this.courss = res;
      });
    }

  beforeViewRender(
    event:
      | CalendarMonthViewBeforeRenderEvent
      | CalendarWeekViewBeforeRenderEvent
      | CalendarDayViewBeforeRenderEvent
  ) {
    this.period = event.period;
    this.cdr.detectChanges();
    this.ngOnInit();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'xl' });

  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

///////////////////////////////////////////////////////////////////////

  deleteCours(event: Cours) {
    this.modals
      .addModal(ModalConfirmComponent, {
        title: `Supprimer ${event.title} ${event.id} ?`,
        message: 'Êtes-vous sûr de vouloir supprimer cet cours ?'
      })
      .subscribe(result => {
        if (result) {
          this.service.deleteCoursById(event.id).subscribe(res => {
            this.alertify.succes('Supprimé');
            this.ngOnInit();
          });
        }
      });
  }

  openCours(cours: Cours) {
    this.service2.pushObject(cours);
  }

  onCoursUpdated(cours: Cours) {
    this.service.putCoursWithControl(cours.id, cours).subscribe((result) => {
      this.ngOnInit();
      this.alertify.succes('modifié');
    }, error => {
      this.alertify.error('Professeur indisponible ou erreur de saisie dans les dates');
    });
  }

  onCoursCreated(cours: Cours) {
    this.service.addCoursWithControl(cours).subscribe(result => {
      // this.courss.push(result);
      this.ngOnInit();
      this.alertify.succes('ajouté');
    }, error => {
      this.alertify.error('Professeur indisponible ou erreur de saisie dans les dates');
    } );
  }

  openCoursDetail(cours: Cours) {
    this.service.getCoursById(cours.id).subscribe(res => {
      this.cours = res;
      this.service2.pushObject(cours);
      console.log(this.cours);

    });
    this.alertify.succes('Detail');
  }

}
