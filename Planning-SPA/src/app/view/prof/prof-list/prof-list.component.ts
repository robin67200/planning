import { ProfService } from './../services/prof.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Prof } from '../models/prof';

@Component({
  selector: 'app-prof-list',
  templateUrl: './prof-list.component.html',
  styleUrls: ['./prof-list.component.css']
})
export class ProfListComponent implements OnInit {

  profs: any;
  bsModalRef: BsModalRef;
  prof: Prof;

  constructor(
    private service: ProfService,
    private modalService: BsModalService,
    ) { }

  ngOnInit() {
    this.service.getProf().subscribe(
      response => {
        this.profs = response;
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
