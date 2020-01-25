import { ProfDelMatiereModalsComponent } from './prof-del-matiere-modals/prof-del-matiere-modals.component';
import { ProfAddClasseModalsComponent } from './prof-add-classe-modals/prof-add-classe-modals.component';
import { ProfAddMatiereModalsComponent } from './prof-add-matiere-modals/prof-add-matiere-modals.component';
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
import { AlertifyService } from '../../_services/alertify.service';
import { ProfDelClasseModalsComponent } from './prof-del-classe-modals/prof-del-classe-modals.component';
import { MatiereService } from '../../matiere/services/matiere.service';

@Component({
  selector: 'app-prof-detail',
  templateUrl: './prof-detail.component.html',
  styleUrls: ['./prof-detail.component.css']
})
export class ProfDetailComponent implements OnInit {

  id: number;
  matiereId: number;
  prof: Prof = new Prof('', '', '', '', 0, 0);
  profs: Prof = new Prof('', '', '', '', 0, 0);
  bsModalRef: BsModalRef;
  matieres: Matiere[];
  classes: Classe[];
  cours: Cours[];
  matiere: Matiere;
  date = Date.now();

  constructor(
    route: ActivatedRoute,
    private service: ProfService,
    private modalService: BsModalService,

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

  addMatiereM(prof: Prof) {
    const initialState = {
      prof
    };
    this.bsModalRef = this.modalService.show(ProfAddMatiereModalsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';

  }

  addClasseM(prof: Prof) {
    const initialState = {
      prof
    };
    this.bsModalRef = this.modalService.show(ProfAddClasseModalsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  deleteMatiereM(prof: Prof, matiere: Matiere) {
    const initialState = {
      prof,
      matiere
    };
    this.bsModalRef = this.modalService.show(ProfDelMatiereModalsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  deleteClasseM(prof: Prof, classe: Classe) {
    const initialState = {
      prof,
      classe,
    };
    this.bsModalRef = this.modalService.show(ProfDelClasseModalsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';

  }

/*
  addMatiere() {
    this.service.getMatieresAvailable(this.id).subscribe((matieres) => {
      this.modals.addModal(ModalItemSelectorComponent, {
        title: 'Veuillez selectionner une matière',
        items: matieres.map((m) => new ListItem(m.id, m.nom))
      }).subscribe((result) => {
        this.service.addMatiere(this.id, result.id).subscribe((res) => {
          this.ngOnInit();
        });
        this.alertify.succes('Ajouté');
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
        this.alertify.succes('Ajouté');
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
        this.alertify.succes('Supprimé');
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
        this.alertify.succes('Supprimé');
      } else {
      }
    });
  }
*/

}
