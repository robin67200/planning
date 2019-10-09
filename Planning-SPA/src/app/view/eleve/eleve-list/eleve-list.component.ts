import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Eleve } from '../models/eleve';
import { EleveService } from '../services/eleve.service';

@Component({
  selector: 'app-eleve-list',
  templateUrl: './eleve-list.component.html',
  styleUrls: ['./eleve-list.component.css']
})
export class EleveListComponent implements OnInit {

  eleves: any;
  bsModalRef: BsModalRef;
  eleve: Eleve;

  constructor(
    private service: EleveService,
    private modalService: BsModalService,
    ) { }

  ngOnInit() {
    this.service.getEleve().subscribe(
      response => {
        this.eleves = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
