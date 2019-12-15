import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Annee } from '../models/annee';
import { Router } from '@angular/router';
import { AnneeService } from '../services/annee.service';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-annee-modal',
  templateUrl: './annee-modal.component.html',
  styleUrls: ['./annee-modal.component.css']
})
export class AnneeModalComponent implements OnInit {
  closeBtnName: string;
  annee: Annee;
  annees: Annee[];

  constructor(
    private router: Router,
    private service: AnneeService,
    public bsModalRef: BsModalRef,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.service.getAnnee().subscribe(
      response => {
        this.annees = response;
      }
    );
  }

  getAnnees() {
    this.service.getAnnee().subscribe((response) => {
      this.annees = response;
    });
  }

  deletedAnnee(id: number) {
    this.service.deleteAnneById(id).subscribe(res => {
      this.router.navigateByUrl('/AnneeListComponent', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/annees/list']);
    });
      this.alertify.succes('supprimé');
    });
  }

}
