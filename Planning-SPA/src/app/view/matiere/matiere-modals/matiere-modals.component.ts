import { MatiereService } from 'src/app/view/matiere/services/matiere.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { AlertifyService } from '../../_services/alertify.service';
import { Router } from '@angular/router';
import { Matiere } from '../models/matiere';

@Component({
  selector: 'app-matiere-modals',
  templateUrl: './matiere-modals.component.html',
  styleUrls: ['./matiere-modals.component.css']
})
export class MatiereModalsComponent implements OnInit {

  @Output() delMatiere = new EventEmitter();

  closeBtnName: string;
  matieres: Matiere;
  matiere: any;

  constructor(
    public bsModalRef: BsModalRef,
    private service: MatiereService,
    private alertify: AlertifyService,
    private router: Router,
    ) {}

  ngOnInit() {
  }

  deleteMatiere(matiere: Matiere) {
    this.service.deleteMatiereById(matiere.id).subscribe(res => {
      this.router.navigateByUrl('/MatiereListComponent', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/matieres/list']);
    });
      this.alertify.succes('supprimé');
    });
  }

}
