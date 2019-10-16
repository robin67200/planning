import { Component, OnInit } from '@angular/core';
import { Eleve } from '../models/eleve';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ActivatedRoute, Params } from '@angular/router';
import { EleveService } from '../services/eleve.service';

@Component({
  selector: 'app-eleve-detail',
  templateUrl: './eleve-detail.component.html',
  styleUrls: ['./eleve-detail.component.css']
})
export class EleveDetailComponent implements OnInit {

  id: number;
  eleves: Eleve = new Eleve('', '', '', '', 0, new Date(), 0);
  bsModalRef: BsModalRef;

  constructor(
    route: ActivatedRoute,
    private service: EleveService,
    private modalService: BsModalService,

  ) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
   }

  ngOnInit() {
    this.service.getEleveById(this.id).subscribe(res => {
      this.eleves = res;
    },
  );
}

}
