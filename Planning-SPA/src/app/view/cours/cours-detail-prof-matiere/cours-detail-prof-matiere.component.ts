import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ProfService, ProfService2 } from '../../prof/services/prof.service';
import { ActivatedRoute, Params } from '@angular/router';
import { SimpleModalService } from 'ngx-simple-modal';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { AlertifyService } from '../../_services/alertify.service';
import { Prof } from '../../prof/models/prof';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cours-detail-prof-matiere',
  templateUrl: './cours-detail-prof-matiere.component.html',
  styleUrls: ['./cours-detail-prof-matiere.component.css']
})
export class CoursDetailProfMatiereComponent implements OnInit {

  profs: Prof[] =  [];
  id: number;
  prof: Prof;
  searchText: any;
  bsModalRef: BsModalRef;

  constructor(
    private service: ProfService,
    private modalService: BsModalService,
    private service2: ProfService2,
    private modals: SimpleModalService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private alertify: AlertifyService

    ) {

     }

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
}
