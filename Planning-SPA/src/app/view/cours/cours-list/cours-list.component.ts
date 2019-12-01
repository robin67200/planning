import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Cours } from '../models/cours';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CoursService, CoursService2 } from '../services/cours.service';
import { SimpleModalService } from 'ngx-simple-modal';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.css']
})
export class CoursListComponent implements OnInit {

  locale = 'fr';
  courss: Cours[];
  cours: any;

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  constructor(
    private modal: NgbModal,
    private service: CoursService,
    private service2: CoursService2,
    private modals: SimpleModalService,
      ) { }

  ngOnInit() {
    this.service.getCours().subscribe(res => {
      this.courss = res;
    });
  }

  deleteCours(cours: Cours) {
    this.modals
      .addModal(ModalConfirmComponent, {
        title: `Supprimer ${cours.title} ${cours.id} ?`,
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



