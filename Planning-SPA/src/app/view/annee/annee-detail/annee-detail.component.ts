import { AnneeService } from './../services/annee.service';
import { Annee } from './../models/annee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-annee-detail',
  templateUrl: './annee-detail.component.html',
  styleUrls: ['./annee-detail.component.css']
})
export class AnneeDetailComponent implements OnInit {


  id: number;
  Annee: Annee = new Annee('');
  bsModalRef: BsModalRef;

  constructor(
    route: ActivatedRoute,
    private service: AnneeService,
    private modalService: BsModalService,

  ) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
   }

  ngOnInit() {
    this.service.getAnneeById(this.id).subscribe(res => {
      this.annee = res;
    });
  }
  deleteJury(jury: Annee) {
    const initialState = {
      jury
    };
    this.bsModalRef = this.modalService.show(AnneeModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
