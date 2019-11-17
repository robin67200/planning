import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfService } from '../services/prof.service';
import { Prof } from '../models/prof';
import { Matiere } from '../../matiere/models/matiere';
import { Classe } from '../../classe/models/classe';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { ModalItemSelectorComponent } from 'src/app/components/modals/item-selector-modal';
import { ListItem } from 'src/app/components/model/list-item';
import { Cours } from '../../cours/models/cours';

@Component({
  selector: 'app-prof-detail',
  templateUrl: './prof-detail.component.html',
  styleUrls: ['./prof-detail.component.css']
})
export class ProfDetailComponent implements OnInit {

  id: number;
  matiereId: number;
  prof: Prof = new Prof('', '', '', '', 0);
  profs: Prof = new Prof('', '', '', '', 0);
  bsModalRef: BsModalRef;
  matieres: Matiere[];
  classes: Classe[];
  cours: Cours[];
  matiere: Matiere;

  constructor(
    route: ActivatedRoute,
    private service: ProfService,
    private modals: SimpleModalService,

  ) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
   }

  ngOnInit() {
    this.service.getProfById(this.id).subscribe(res => {
      this.prof = res;
    });
}
  addMatiere() {
    this.service.getMatieresAvailable(this.id).subscribe((matieres) => {
      this.modals.addModal(ModalItemSelectorComponent, {
        title: 'Veuillez selectionner une matière',
        items: matieres.map((m) => new ListItem(m.id, m.nom))
      }).subscribe((result) => {
        this.service.addMatiere(this.id, result.id).subscribe((res) => {
          this.ngOnInit();
        });
      });
    });
  }

  addClasse() {
    this.service.getClasseAvailable(this.id).subscribe((classes) => {
      this.modals.addModal(ModalItemSelectorComponent, {
        title: 'Veuillez selectionner une classe',
        items: classes.map((m) => new ListItem(m.id, m.nom))
      }).subscribe((result) => {
        this.service.addClasse(this.id, result.id).subscribe((res) => {
          this.ngOnInit();
        });
      });
    });
  }


  deleteMatiere2(prof: Prof, matiere: Matiere) {
    this.modals.addModal(ModalConfirmComponent, {
      title: `Supprimer la matière ${matiere.nom} ?`,
      message: 'Etes-vous sûr de vouloir supprimer cette matière pour ce professeur ?'
    }).subscribe((result) => {
      if (result) {
        this.service.deleteMatiere(prof.id, matiere.id).subscribe((res) => {
          this.ngOnInit();
        });
      } else {
      }
    });
  }

  deleteClasse(prof: Prof, classe: Classe) {
    this.modals.addModal(ModalConfirmComponent, {
      title: `Supprimer la classe ${classe.nom} ?`,
      message: 'Etes-vous sûr de vouloir supprimer cette classe pour ce professeur ?'
    }).subscribe((result) => {
      if (result) {
        this.service.deleteClasse(prof.id, classe.id).subscribe((res) => {
          this.ngOnInit();
        });
      } else {
      }
    });
  }


}
