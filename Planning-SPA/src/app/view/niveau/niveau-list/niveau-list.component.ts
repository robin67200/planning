import { NiveauModalsComponent } from './../niveau-modals/niveau-modals.component';
import { Niveau } from './../models/niveau';
import { NiveauService } from './../services/niveau.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { SimpleModalService, SimpleModalServiceConfig } from 'ngx-simple-modal';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { ModalSimpleInputComponent } from 'src/app/components/modals/simple-input-modals';
import { AlertifyService } from '../../_services/alertify.service';
import { RolesModalComponent } from '../../admin/roles-modal/roles-modal.component';

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
    private modalService: BsModalService,
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

  deleteniveau(niveau: Niveau) {
    const initialState = {
      niveau
    };
    this.bsModalRef = this.modalService.show(NiveauModalsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';

  }
}
