import { CoursService, CoursService2 } from './../services/cours.service';
import { Component, OnInit } from '@angular/core';
import { Cours } from '../models/cours';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ActivatedRoute, Params } from '@angular/router';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { SimpleModalService } from 'ngx-simple-modal';

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
    private service2: CoursService2,
    private modals: SimpleModalService,

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
  deleteCours(cours: Cours) {
    this.modals
      .addModal(ModalConfirmComponent, {
        title: `Supprimer ${cours.title} ?`,
        message: 'Êtes-vous sûr de vouloir supprimer cet cours ?'
      })
      .subscribe(result => {
        if (result) {
          this.service.deleteCoursById(cours.id).subscribe(res => {
            this.ngOnInit();
          });
        }
      });
  }
  openCours(cours: Cours) {
    this.service2.pushObject(cours);
  }

  onCoursUpdated(cours: Cours) {
    this.service.putCours(cours.id, cours).subscribe((result) => {
      this.ngOnInit();
    });
  }

  onCoursCreated(cours: Cours) {
    this.service.postCours(cours).subscribe(result => {
      // this.courss.push(result);
      this.ngOnInit();
    });
  }
}
