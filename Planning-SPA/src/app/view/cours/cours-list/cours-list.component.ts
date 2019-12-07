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

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.css']
})
export class CoursListComponent implements OnInit {

  locale = 'fr';
  courss: Cours[];
  cours: any;
  profs: Prof[] = [];
  matieres: Matiere[] = [];

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  constructor(
    private modal: NgbModal,
    private service: CoursService,
    private service2: CoursService2,
    private modals: SimpleModalService,
    private profService: ProfService,
    private matiereService: MatiereService,
      ) { }

  ngOnInit() {
    this.service.getCours().subscribe(res => {
      this.courss = res;
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

  openCoursDetail(cours: Cours) {
    this.service.getCoursById(cours.id).subscribe(res => {
      this.cours = res;
      this.service2.pushObject(cours);
    });
  }
}



