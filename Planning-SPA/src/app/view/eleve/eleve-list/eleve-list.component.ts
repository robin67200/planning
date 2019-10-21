import { SimpleModalService } from 'ngx-simple-modal';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Eleve } from '../models/eleve';
import { EleveService, EleveService2 } from '../services/eleve.service';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';

@Component({
  selector: 'app-eleve-list',
  templateUrl: './eleve-list.component.html',
  styleUrls: ['./eleve-list.component.css']
})
export class EleveListComponent implements OnInit {

  eleves: Eleve[] = [];
  bsModalRef: BsModalRef;
  eleve: Eleve;

  constructor(
    private service: EleveService,
    private service2: EleveService2,
    private modals: SimpleModalService,
    ) { }

  ngOnInit() {
    this.service.getEleve().subscribe(
      response => {
        this.eleves = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  addEleve(eleve: Eleve) {

  }

  deleteEleve(eleve: Eleve) {
    this.modals
      .addModal(ModalConfirmComponent, {
        title: `Supprimer ${eleve.prenom} ${eleve.nom} ?`,
        message: 'Êtes-vous sûr de vouloir supprimer cet élève ?'
      })
      .subscribe(result => {
        if (result) {
          this.service.deleteEleveById(eleve.id).subscribe(res => {
            this.ngOnInit();
          });
        }
      });
  }

  openEleve(eleve: Eleve) {
    this.service2.pushObject(eleve);
  }

  onEleveUpdated(eleve: Eleve) {
    this.service.putEleve(eleve.id, eleve).subscribe(result => {
      this.ngOnInit();
    });
  }

  onEleveCreated(eleve: Eleve) {
    this.service.postEleve(eleve).subscribe(result => {
      this.eleves.push(result);
    });
  }
}
