import { MatiereModalsComponent } from './../matiere-modals/matiere-modals.component';
import { Component, OnInit } from '@angular/core';
import { Matiere } from '../models/matiere';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { MatiereService } from '../services/matiere.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModalSimpleInputComponent } from 'src/app/components/modals/simple-input-modals';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { AlertifyService } from '../../_services/alertify.service';
import { NiveauModalsComponent } from '../../niveau/niveau-modals/niveau-modals.component';

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
    private alertify: AlertifyService,
    private modalService: BsModalService
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
        this.alertify.succes('Ajouté');
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
        this.alertify.succes('Modifié');
      }
    });
  }


  deleteMatiere(matiere: Matiere) {
    const initialState = {
      matiere
    };
    this.bsModalRef = this.modalService.show(MatiereModalsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';

  }
}
