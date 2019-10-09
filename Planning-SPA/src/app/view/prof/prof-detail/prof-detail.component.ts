import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfService } from '../services/prof.service';
import { Prof } from '../models/prof';

@Component({
  selector: 'app-prof-detail',
  templateUrl: './prof-detail.component.html',
  styleUrls: ['./prof-detail.component.css']
})
export class ProfDetailComponent implements OnInit {

  id: number;
  profs: Prof = new Prof('', '', '', '', 0);
  bsModalRef: BsModalRef;

  constructor(
    route: ActivatedRoute,
    private service: ProfService,
    private modalService: BsModalService,

  ) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
   }

  ngOnInit() {
    this.service.getProfById(this.id).subscribe(res => {
      this.profs = res;
    });
}
  /*deleteJury(jury: Prof) {
    const initialState = {
      jury
    };
    this.bsModalRef = this.modalService.show(ProfModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
*/
}
