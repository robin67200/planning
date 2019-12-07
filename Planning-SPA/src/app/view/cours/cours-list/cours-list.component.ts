import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Cours } from '../models/cours';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CoursService, CoursService2 } from '../services/cours.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { ProfService } from '../../prof/services/prof.service';
import { MatiereService } from '../../matiere/services/matiere.service';
import { Matiere } from '../../matiere/models/matiere';
import { Prof } from '../../prof/models/prof';
import { IndisponibiliteService } from '../../indisponibilite/services/indisponibilite.service';
import { Indisponibilite } from '../../indisponibilite/models/indisponibilite';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.css']
})
export class CoursListComponent implements OnInit {

  locale = 'fr';
  courss: Cours[];
  indispos: Indisponibilite[];
  cours: any;
  profs: Prof[] = [];
  matieres: Matiere[] = [];
  valid: boolean;

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  constructor(
    private modal: NgbModal,
    private alertify: AlertifyService,
    private service: CoursService,
    private service2: CoursService2,
    private modals: SimpleModalService,
    private profService: ProfService,
    private matiereService: MatiereService,
    private indispoService: IndisponibiliteService
      ) { }

  ngOnInit() {
    this.service.getCours().subscribe(res => {
      this.courss = res;
      this.profService.getProf().subscribe(profs => {
        this.profs = profs;
        this.matiereService.getMatiere().subscribe(matieres => {
          this.matieres = matieres;
          this.indispoService.getIndisponibilites().subscribe(r => {
            this.indispos = r;
            this.courss.forEach(c => {
              const prof = this.profs.find(n => n.id === c.professeurId);
              c.profName = prof.nom;
              const matiere = this.matieres.find(a => a.id === c.matiereId);
              c.matiereName = matiere.nom;
            });
          });
        });
      });
    });
  }

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
    });
  }
}



