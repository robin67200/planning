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
      onClick: (): void => {
        this.openCours(this.cours);
        this.ngOnInit();
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: (): void => {
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
            /*
            this.courss.forEach(c => {
              const prof = this.profs.find(n => n.id === c.professeurId);
              c.profName = prof.nom;
              const matiere = this.matieres.find(a => a.id === c.matiereId);
              c.matiereName = matiere.nom;
            });
            */
          });
        });
      }, err => {
          console.log(err);
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
    this.ngOnInit();
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
    this.ngOnInit();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'xl' });
    this.ngOnInit();

  }

  setView(view: CalendarView) {
    this.view = view;
    this.ngOnInit();

  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
    this.ngOnInit();

  }

///////////////////////////////////////////////////////////////////////

  deleteCours(cours: Cours) {
    this.modals
      .addModal(ModalConfirmComponent, {
        title: `Supprimer ${cours.title} ${cours.id} ?`,
        message: 'Êtes-vous sûr de vouloir supprimer cet cours ?'
      })
      .subscribe(result => {
        if (result) {
          this.service.deleteCoursById(cours.id).subscribe(res => {
            this.ngOnInit();
          });
        }
      });
  }

  openCours(cours: Cours) {
    this.service2.pushObject(cours);
  }

  onCoursUpdated(cours: Cours) {
    this.service.putCours(cours.id, cours).subscribe((result) => {
      this.ngOnInit();
    });
  }

  onCoursCreated(cours: Cours) {
    this.service.postCours(cours).subscribe(result => {
      // this.courss.push(result);
      this.ngOnInit();
    });
  }
}
