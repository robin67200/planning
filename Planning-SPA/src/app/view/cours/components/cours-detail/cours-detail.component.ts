import { CoursService2 } from './../../services/cours.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cours } from '../../models/cours';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { CoursService } from '../../services/cours.service';

@Component({
  selector: 'app-cours-detail',
  templateUrl: './cours-detail.component.html',
  styleUrls: ['./cours-detail.component.css']
})
export class CoursDetailComponent implements OnInit {

  id: number;
  cours: Cours = new Cours('', '', new Date(),  new Date(), '', '', 0, 0);

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDetail = new EventEmitter<any>();

  constructor(
    route: ActivatedRoute,
    private service: CoursService,
    private service2: CoursService2,

  ) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
   }

  ngOnInit() {
    this.service2.objectChanged().subscribe(courss => {
      this.cours = courss;
    });
   }

  close() {
    this.onClose.emit(null);
  }
}
