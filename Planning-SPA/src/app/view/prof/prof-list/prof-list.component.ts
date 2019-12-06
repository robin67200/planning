import { ProfService, ProfService2 } from './../services/prof.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Prof } from '../models/prof';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { SimpleModalService } from 'ngx-simple-modal';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

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

  constructor(
    private service: ProfService,
    private modalService: BsModalService,
    private service2: ProfService2,
    private modals: SimpleModalService,
    private route: ActivatedRoute,
    private http: HttpClient

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
  deleteProf(prof: Prof) {
    this.modals
      .addModal(ModalConfirmComponent, {
        title: `Supprimer ${prof.prenom} ${prof.nom} ?`,
        message: 'Êtes-vous sûr de vouloir supprimer cet prof ?'
      })
      .subscribe(result => {
        if (result) {
          this.service.deleteProfById(prof.id).subscribe(res => {
            this.ngOnInit();
          });
        }
      });
  }

  openProf(prof: Prof) {
    this.service2.pushObject(prof);
  }

  onProfUpdated(prof: Prof) {
    this.service.putProf(prof.id, prof).subscribe((result) => {
      this.ngOnInit();
    });
  }

  onProfCreated(prof: Prof) {
    this.service.postProf(prof).subscribe(result => {
      // this.profs.push(result);
      this.ngOnInit();
    });
  }
}

