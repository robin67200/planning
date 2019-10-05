import { Component, OnInit } from '@angular/core';
import { Prof } from '../../prof/models/prof';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ActivatedRoute, Params } from '@angular/router';
import { Classe } from '../models/classe';
import { ClasseService } from '../services/classe.service';

@Component({
  selector: 'app-classe-detail',
  templateUrl: './classe-detail.component.html',
  styleUrls: ['./classe-detail.component.css']
})
export class ClasseDetailComponent implements OnInit {

  id: number;
  classes: Classe = new Classe('', 0, 0);
  bsModalRef: BsModalRef;

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
      this.classes = res;
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
