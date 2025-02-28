import { ProfModalsComponent } from './../prof-modals/prof-modals.component';
import { ProfService, ProfService2 } from './../services/prof.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Prof } from '../models/prof';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { SimpleModalService } from 'ngx-simple-modal';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-prof-list',
  templateUrl: './prof-list.component.html',
  styleUrls: ['./prof-list.component.css']
})
export class ProfListComponent implements OnInit {

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
  searchByName(name: string) {
    this.service.getByName(name).subscribe(res => {
      this.profs = res;
    });
  }

  openProf(prof: Prof) {
    this.service2.pushObject(prof);
  }

  onProfUpdated(prof: Prof) {
    this.service.putProf(prof.id, prof).subscribe((result) => {
      this.alertify.succes('Modifié');
      this.ngOnInit();
    });
  }

  onProfCreated(prof: Prof) {
    this.service.postProf(prof).subscribe(result => {
      // this.profs.push(result);
      this.alertify.succes('Ajouté');
      this.ngOnInit();
    });
  }
  deleteProf(prof: Prof) {
    const initialState = {
      prof
    };
    this.bsModalRef = this.modalService.show(ProfModalsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';

  }
}

