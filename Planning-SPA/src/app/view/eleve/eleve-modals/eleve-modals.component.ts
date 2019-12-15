import { Component, OnInit } from '@angular/core';
import { Eleve } from '../models/eleve';
import { BsModalRef } from 'ngx-bootstrap';
import { EleveService } from '../services/eleve.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eleve-modals',
  templateUrl: './eleve-modals.component.html',
  styleUrls: ['./eleve-modals.component.css']
})
export class EleveModalsComponent implements OnInit {

  closeBtnName: string;
  eleves: Eleve;
  eleve: any;

  constructor(
    public bsModalRef: BsModalRef,
    private service: EleveService,
    private alertify: AlertifyService,
    private router: Router,
    ) {}

  ngOnInit() {
  }

  deleteEleve(eleve: Eleve) {
    this.service.deleteEleveById(eleve.id).subscribe(res => {
      this.router.navigateByUrl('/EleveListComponent', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/eleves/list']);
    });
      this.alertify.succes('supprimé');
    });
  }

}
