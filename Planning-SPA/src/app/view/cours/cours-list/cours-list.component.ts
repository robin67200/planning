import { CoursService } from './../services/cours.service';
import { Component, OnInit } from '@angular/core';
import { Cours } from '../models/cours';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.css']
})
export class CoursListComponent implements OnInit {

  courss: any;
  bsModalRef: BsModalRef;
  cours: Cours;

  constructor(
    private service: CoursService,
    private modalService: BsModalService,
    ) { }

  ngOnInit() {
    this.service.getCours().subscribe(
      response => {
        this.courss = response;
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
