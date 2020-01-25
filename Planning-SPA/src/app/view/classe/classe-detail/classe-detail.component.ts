import { ClasseDetailDelCoursComponent } from './classe-detail-del-cours/classe-detail-del-cours.component';
import { ClasseDetailAddCoursComponent } from './classe-detail-add-cours/classe-detail-add-cours.component';
import { Component, OnInit } from '@angular/core';
import { Prof } from '../../prof/models/prof';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ActivatedRoute, Params } from '@angular/router';
import { Classe } from '../models/classe';
import { ClasseService } from '../services/classe.service';
import { Eleve } from '../../eleve/models/eleve';
import { Cours } from '../../cours/models/cours';
import { ModalItemSelectorComponent } from 'src/app/components/modals/item-selector-modal';
import { SimpleModalService } from 'ngx-simple-modal';
import { ListItem } from 'src/app/components/model/list-item';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-classe-detail',
  templateUrl: './classe-detail.component.html',
  styleUrls: ['./classe-detail.component.css']
})
export class ClasseDetailComponent implements OnInit {

  id: number;
  classes: Classe = new Classe('', 0, 0);
  classe: Classe = new Classe('', 0, 0);
  bsModalRef: BsModalRef;
  prof: Prof[];
  eleves: Eleve[];
  cours: Cours[];
  classess: Classe[];

  constructor(
    route: ActivatedRoute,
    private service: ClasseService,
    private modals: SimpleModalService,
    private alertify: AlertifyService,
    private modalService: BsModalService,


  ) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
   }

  ngOnInit() {
    this.service.getClasseById(this.id).subscribe(res => {
      this.classe = res;
      });
  }

  addCoursM(classe: Classe) {
    const initialState = {
      classe
    };
    this.bsModalRef = this.modalService.show(ClasseDetailAddCoursComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';

  }

  delCoursM(classe: Classe, cours: Cours) {
    const initialState = {
      classe,
      cours
    };
    this.bsModalRef = this.modalService.show(ClasseDetailDelCoursComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
/*
  addCours() {
    this.service.getCoursAvailable(this.id).subscribe((cours) => {
      this.modals.addModal(ModalItemSelectorComponent, {
        title: 'Veuillez selectionner un cours',
        items: cours.map((m) => new ListItem(m.id, m.title))
      }).subscribe((result) => {
        this.service.addCours(this.id, result.id).subscribe((res) => {
          this.ngOnInit();
        });
        this.alertify.succes('Ajouté');
      });
    });
  }

  deleteCours(classe: Classe, cours: Cours) {
    this.modals.addModal(ModalConfirmComponent, {
      title: `Retirer le cours ${cours.title} ?`,
      message: 'Etes-vous sûr de vouloir retirer ce cours pour cette classe ?'
    }).subscribe((result) => {
      if (result) {
        this.service.deleteCours(classe.id, cours.id).subscribe((res) => {
          this.ngOnInit();
        });
        this.alertify.succes('Supprimé');
      } else {
      }
    });
  }
*/
}
