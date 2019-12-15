import { Component, OnInit } from '@angular/core';
import { Prof } from '../models/prof';
import { BsModalRef } from 'ngx-bootstrap';
import { ProfService } from '../services/prof.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prof-modals',
  templateUrl: './prof-modals.component.html',
  styleUrls: ['./prof-modals.component.css']
})
export class ProfModalsComponent implements OnInit {

  closeBtnName: string;
  profs: Prof;
  prof: any;

  constructor(
    public bsModalRef: BsModalRef,
    private service: ProfService,
    private alertify: AlertifyService,
    private router: Router,
    ) {}

  ngOnInit() {
  }

  deleteProf(prof: Prof) {
    this.service.deleteProfById(prof.id).subscribe(res => {
      this.router.navigateByUrl('/ProfListComponent', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/profs/list']);
    });
      this.alertify.succes('supprimé');
    });
  }
}
