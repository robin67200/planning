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
  professeurs: Prof[];
  eleves: Eleve[];
  cours: Cours[];

  constructor(
    route: ActivatedRoute,
    private service: ClasseService,
    private modals: SimpleModalService,

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

  addCours() {
    this.service.getCoursAvailable(this.id).subscribe((cours) => {
      this.modals.addModal(ModalItemSelectorComponent, {
        title: 'Veuillez selectionner un cours',
        items: cours.map((m) => new ListItem(m.id, m.title))
      }).subscribe((result) => {
        this.service.addCours(this.id, result.id).subscribe((res) => {
          this.ngOnInit();
        });
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
      } else {
      }
    });
  }

}
