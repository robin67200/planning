import { Niveau } from './../models/niveau';
import { NiveauService } from './../services/niveau.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { SimpleModalService } from 'ngx-simple-modal';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { ModalSimpleInputComponent } from 'src/app/components/modals/simple-input-modals';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-niveau-list',
  templateUrl: './niveau-list.component.html',
  styleUrls: ['./niveau-list.component.css']
})

export class NiveauListComponent implements OnInit {

  niveaux: Niveau[] = [];
  niveau: any;
  bsModalRef: BsModalRef;
  niveaup: Niveau;

  constructor(
    private service: NiveauService,
    private modals: SimpleModalService,
    private alertify: AlertifyService
    ) { }

  ngOnInit() {
    this.service.getNiveau().subscribe(
      response => {
        this.niveau = response;
      },
      error => {
        console.log(error);
      }
    );
  }

 addniveau() {
    this.modals.addModal(ModalSimpleInputComponent, {
      title: `Ajout d'un nouveau niveau`,
      message: 'Veuillez entrer son nom',
      defaultValue: '',
      label: 'nom'
    }).subscribe(result => {
      if (result) {
        const niveaup = new Niveau(result.toString());
        this.service.postNiveau(niveaup).subscribe(res => {
          this.ngOnInit();
        });
        this.alertify.succes('Ajouté');
      }
    });
  }

   modifyniveau(niveau: Niveau) {
    this.modals.addModal(ModalSimpleInputComponent, {
      title:  `Modification`,
      message: `Veuillez modifier le niveau`,
      defaultValue: niveau.nom,
      label: 'nom'
    }).subscribe(result => {
      if (result) {
        niveau.nom = result.toString();
        this.service.putNiveau(niveau.id, niveau).subscribe(res => {
          this.niveaux.push(res);
        });
        this.alertify.succes('Modifié');
      }
    });
  }


  deleteniveau(niveau: Niveau) {
    this.modals
      .addModal(ModalConfirmComponent, {
        title: `Supprimer le niveau ${niveau.nom} ?`,
        message: 'Êtes-vous sûr de vouloir supprimer ce niveau ?'
      })
      .subscribe(result => {
        if (result) {
          this.service.deleteNiveauById(niveau.id).subscribe(res => {
            // const index = this.niveauss.indexOf(niveau);
            // this.niveauss.splice(index, 1);
            this.ngOnInit();
          });
          this.alertify.succes('Supprimé');
        }
      });
  }
}
