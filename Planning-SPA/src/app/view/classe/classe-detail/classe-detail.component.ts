import { Component, OnInit } from '@angular/core';
import { Prof } from '../../prof/models/prof';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ActivatedRoute, Params } from '@angular/router';
import { Classe } from '../models/classe';
import { ClasseService } from '../services/classe.service';
import { Eleve } from '../../eleve/models/eleve';

@Component({
  selector: 'app-classe-detail',
  templateUrl: './classe-detail.component.html',
  styleUrls: ['./classe-detail.component.css']
})
export class ClasseDetailComponent implements OnInit {

  id: number;
  classes: Classe = new Classe('', 0, 0);
  classe: Classe = new Classe('', 0, 0);
  bsModalRef: BsModalRef;
  professeurs: Prof[];
  eleves: Eleve[];

  constructor(
    route: ActivatedRoute,
    private service: ClasseService,
    private modalService: BsModalService,

  ) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
   }

  ngOnInit() {
    this.service.getClasseById(this.id).subscribe(res => {
      this.classe = res;
    });
  }
}
