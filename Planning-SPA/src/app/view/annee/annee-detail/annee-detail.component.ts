import { AnneeService } from './../services/annee.service';
import { Annee } from './../models/annee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';

@Component({
  selector: 'app-annee-detail',
  templateUrl: './annee-detail.component.html',
  styleUrls: ['./annee-detail.component.css']
})
export class AnneeDetailComponent implements OnInit {


  id: number;
  annees: Annee = new Annee('');
  bsModalRef: BsModalRef;

  constructor(
    route: ActivatedRoute,
    private service: AnneeService,
    private modals: SimpleModalService,
    private router: Router

  ) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
   }

  ngOnInit() {
    this.service.getAnneeById(this.id).subscribe(res => {
      this.annees = res;
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

deleteClasse(annee: Annee) {
  this.modals
    .addModal(ModalConfirmComponent, {
      title: `Supprimer ${annee.nom} ?`,
      message: 'Êtes-vous sûr de vouloir supprimer cette année ?'
    })
    .subscribe((result) => {
      if (result) {
        this.service.deleteAnneById(annee.id).subscribe((res) => {
          this.router.navigate([ 'classes/list/' ]);
        });
      } else {
      }
    });
}
}
