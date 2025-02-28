import { Annee } from './../models/annee';
import { AnneeService, AnneeService2 } from './../services/annee.service';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModalSimpleInputComponent } from 'src/app/components/modals/simple-input-modals';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { AlertifyService } from '../../_services/alertify.service';
import { AnneeModalComponent } from '../annee-modal/annee-modal.component';

@Component({
  selector: 'app-annee-list',
  templateUrl: './annee-list.component.html',
  styleUrls: ['./annee-list.component.css']
})
export class AnneeListComponent implements OnInit {

  anneess: Annee[] = [];
  annees: Annee[];
  bsModalRef: BsModalRef;
  annee: Annee;

  constructor(
    private service: AnneeService,
    private modals: SimpleModalService,
    private alertify: AlertifyService,
    private modalService: BsModalService,
    private service2: AnneeService2,
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
        this.alertify.succes('Ajouté');
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
        this.alertify.succes('Modifié');
      }
    });
  }

  deletModal(annee: Annee) {
    const initialState = {
      annee
    };
    this.bsModalRef = this.modalService.show(AnneeModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
    this.ngOnInit();

  }

  openAnnee(annee: Annee) {
    this.service2.pushObject(annee);

  }

  onAnneeUpdated(annee: Annee) {
    this.service.putAnnee(annee.id, annee).subscribe((result) => {
      this.alertify.succes('Modifié');
      this.ngOnInit();
    });
  }

  onAnneeCreated(annee: Annee) {
    this.service.postAnnee(annee).subscribe(result => {
      this.alertify.succes('Ajouté');
      this.ngOnInit();
    });
  }




  // deleteAnnee(annee: Annee) {
  //   this.modals
  //     .addModal(ModalConfirmComponent, {
  //       title: `Supprimer l'année ${annee.nom} ?`,
  //       message: 'Êtes-vous sûr de vouloir supprimer cette année ?'
  //     })
  //     .subscribe(result => {
  //       if (result) {
  //         this.service.deleteAnneById(annee.id).subscribe(res => {
  //           // const index = this.anneess.indexOf(annee);
  //           // this.anneess.splice(index, 1);
  //           this.ngOnInit();
  //         });
  //         this.alertify.succes('Supprimé');
  //       }
  //     });
  // }
}
