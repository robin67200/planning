import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cours } from '../models/cours';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { CoursService } from '../services/cours.service';

@Component({
  selector: 'app-cours-detail',
  templateUrl: './cours-detail.component.html',
  styleUrls: ['./cours-detail.component.css']
})
export class CoursDetailComponent implements OnInit {

  id: number;
  courss: Cours = new Cours('', '', new Date(),  new Date(),  new Date(), '', 0, 0, 0);
  bsModalRef: BsModalRef;

  constructor(
    route: ActivatedRoute,
    private service: CoursService,
    private modalService: BsModalService,

  ) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
   }

  ngOnInit() {
    this.service.getCoursById(this.id).subscribe(res => {
      this.courss = res;
    });
  }
  /*deleteJury(jury: Annee) {
    const initialState = {
      jury
    };
    this.bsModalRef = this.modalService.show(AnneeModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
*/
}
