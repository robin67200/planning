import { Annee } from './../models/annee';
import { AnneeService } from './../services/annee.service';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-annee-list',
  templateUrl: './annee-list.component.html',
  styleUrls: ['./annee-list.component.css']
})
export class AnneeListComponent implements OnInit {

  annees: any;
  bsModalRef: BsModalRef;
  annne: Annee;

  constructor(
    private service: AnneeService,
    private modalService: BsModalService,
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
}
