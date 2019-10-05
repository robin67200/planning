import { ClasseService } from './../services/classe.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Classe } from '../models/classe';

@Component({
  selector: 'app-classe-list',
  templateUrl: './classe-list.component.html',
  styleUrls: ['./classe-list.component.css']
})
export class ClasseListComponent implements OnInit {

  classes: any;
  bsModalRef: BsModalRef;
  classe: Classe;

  constructor(
    private service: ClasseService,
    private modalService: BsModalService,
    ) { }

  ngOnInit() {
    this.service.getClasse().subscribe(
      response => {
        this.classes = response;
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
