import { Component, OnInit } from '@angular/core';
import { Matiere } from '../models/matiere';
import { BsModalRef } from 'ngx-bootstrap';
import { MatiereService } from '../services/matiere.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModalSimpleInputComponent } from 'src/app/components/modals/simple-input-modals';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';

@Component({
  selector: 'app-matiere-list',
  templateUrl: './matiere-list.component.html',
  styleUrls: ['./matiere-list.component.css']
})
export class MatiereListComponent implements OnInit {

  matierex: Matiere[] = [];
  matieres: any;
  bsModalRef: BsModalRef;
  matierep: Matiere;

  constructor(
    private service: MatiereService,
    private modals: SimpleModalService,
    ) { }

  ngOnInit() {
    this.service.getMatiere().subscribe(
      response => {
        this.matieres = response;
      },
      error => {
        console.log(error);
      }
    );
  }

 addmatiere() {
    this.modals.addModal(ModalSimpleInputComponent, {
      title: `Ajout d'une nouvelle matière`,
      message: 'Veuillez entrer son nom',
      defaultValue: '',
      label: 'nom'
    }).subscribe(result => {
      if (result) {
        const matierep = new Matiere(result.toString());
        this.service.postMatiere(matierep).subscribe(res => {
          this.ngOnInit();
        });
      }
    });
  }

   modifymatiere(matiere: Matiere) {
    this.modals.addModal(ModalSimpleInputComponent, {
      title:  `Modification`,
      message: `Veuillez modifier la matière`,
      defaultValue: matiere.nom,
      label: 'nom'
    }).subscribe(result => {
      if (result) {
        matiere.nom = result.toString();
        this.service.putMatiere(matiere.id, matiere).subscribe(res => {
          this.matierex.push(res);
        });
      }
    });
  }


  deletematiere(matiere: Matiere) {
    this.modals
      .addModal(ModalConfirmComponent, {
        title: `Supprimer le matiere ${matiere.nom} ?`,
        message: 'Êtes-vous sûr de vouloir supprimer cette matière ?'
      })
      .subscribe(result => {
        if (result) {
          this.service.deleteMatiereById(matiere.id).subscribe(res => {
            // const index = this.matieress.indexOf(matiere);
            // this.matieress.splice(index, 1);
            this.ngOnInit();
          });
        }
      });
  }
}
