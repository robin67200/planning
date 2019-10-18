import { Annee } from './../models/annee';
import { AnneeService } from './../services/annee.service';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModalSimpleInputComponent } from 'src/app/components/modals/simple-input-modals';

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

 /* deleteJury(annee: Annee) {
    const initialState = {
      annee
    };
    this.bsModalRef = this.modalService.show(JuryModalsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}*/

 addAnnee() {
    this.modals.addModal(ModalSimpleInputComponent, {
      title: `Ajout d'une nouvelle année`,
      message: 'Veuillez entrer son nom',
      defaultValue: '',
      label: 'Nom'
    }).subscribe(result => {
      if (result) {
        const annee = new Annee('');
        this.service.postAnnee(annee).subscribe(res => {
          this.anneess.push(res);
        });
      }
    });
  }

   modifyAnnee(annee: Annee) {
    this.modals.addModal(ModalSimpleInputComponent, {
      title: 'Modification de la matière',
      message: 'Veuillez entrer le nom de la matière',
      defaultValue: annee.nom,
      label: 'Nom'
    }).subscribe(result => {
      if (result) {
        annee.nom = result.toString();
        this.service.putAnnee(annee.id, annee).subscribe(res => {
          this.ngOnInit();
        });
      }
    });
  }
}
