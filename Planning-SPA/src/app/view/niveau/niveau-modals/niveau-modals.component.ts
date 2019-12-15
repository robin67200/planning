import { AlertifyService } from 'src/app/_services/alertify.service';
import { NiveauService } from './../services/niveau.service';
import { Niveau } from './../models/niveau';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../user/_models/user';
import { BsModalRef } from 'ngx-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-niveau-modals',
  templateUrl: './niveau-modals.component.html',
  styleUrls: ['./niveau-modals.component.css']
})
export class NiveauModalsComponent implements OnInit {

  @Output() delNiveaux = new EventEmitter();

  closeBtnName: string;
  niveaux: Niveau;
  niveau: any;

  constructor(
    public bsModalRef: BsModalRef,
    private service: NiveauService,
    private alertify: AlertifyService,
    private router: Router,
    ) {}

  ngOnInit() {
  }

  deleteNiveau(niveau: Niveau) {
    this.service.deleteNiveauById(niveau.id).subscribe(res => {
      this.router.navigateByUrl('/NiveauListComponent', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/niveaux/list']);
    });
    });
  }
}
