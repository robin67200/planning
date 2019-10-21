import { Annee } from './../models/annee';
import { AnneeService } from './../services/annee.service';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModalSimpleInputComponent } from 'src/app/components/modals/simple-input-modals';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';

@Component({
  selector: 'app-annee-list',
  templateUrl: './annee-list.component.html',
  styleUrls: ['./annee-list.component.css']
})
export class AnneeListComponent implements OnInit {

  anneess: Annee[] = [];
  annees: any;
  bsModalRef: BsModalRef;
  annee: Annee;

  constructor(
    private service: AnneeService,
    private modals: SimpleModalService,
    ) { }

  ngOnInit() {
    this.service.getAnnee().subscribe(
      response => {
        this.annees = response;
      },
      error => {
        console.log(error);
      }
    );
  }

 addAnnee() {
    this.modals.addModal(ModalSimpleInputComponent, {
      title: `Ajout d'une nouvelle année`,
      message: 'Veuillez entrer son nom',
      defaultValue: '',
      label: 'nom'
    }).subscribe(result => {
      if (result) {
        const annee = new Annee(result.toString());
        this.service.postAnnee(annee).subscribe(res => {
          this.ngOnInit();
        });
      }
    });
  }

   modifyAnnee(annee: Annee) {
    this.modals.addModal(ModalSimpleInputComponent, {
      title:  `Modification`,
      message: `Veuillez modifier l'année`,
      defaultValue: annee.nom,
      label: 'nom'
    }).subscribe(result => {
      if (result) {
        annee.nom = result.toString();
        this.service.putAnnee(annee.id, annee).subscribe(res => {
          this.anneess.push(res);
        });
      }
    });
  }


  deleteAnnee(annee: Annee) {
    this.modals
      .addModal(ModalConfirmComponent, {
        title: `Supprimer l'année ${annee.nom} ?`,
        message: 'Êtes-vous sûr de vouloir supprimer cette année ?'
      })
      .subscribe(result => {
        if (result) {
          this.service.deleteAnneById(annee.id).subscribe(res => {
            // const index = this.anneess.indexOf(annee);
            // this.anneess.splice(index, 1);
            this.ngOnInit();
          });
        }
      });
  }
}
