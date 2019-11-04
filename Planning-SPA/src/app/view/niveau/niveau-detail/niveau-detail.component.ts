import { NiveauService } from './../services/niveau.service';
import { Niveau } from './../models/niveau';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';

@Component({
  selector: 'app-niveau-detail',
  templateUrl: './niveau-detail.component.html',
  styleUrls: ['./niveau-detail.component.css']
})
export class NiveauDetailComponent implements OnInit {


  id: number;
  niveaux: Niveau = new Niveau('');
  bsModalRef: BsModalRef;

  constructor(
    route: ActivatedRoute,
    private service: NiveauService,
    private modals: SimpleModalService,
    private router: Router

  ) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
   }

  ngOnInit() {
    this.service.getNiveauById(this.id).subscribe(res => {
      this.niveaux = res;
    });
  }

deleteClasse(annee: Niveau) {
  this.modals
    .addModal(ModalConfirmComponent, {
      title: `Supprimer ${annee.nom} ?`,
      message: 'Êtes-vous sûr de vouloir supprimer ce niveau ?'
    })
    .subscribe((result) => {
      if (result) {
        this.service.deleteNiveauById(annee.id).subscribe((res) => {
          this.router.navigate([ 'classes/list/' ]);
        });
      } else {
      }
    });
}
}
