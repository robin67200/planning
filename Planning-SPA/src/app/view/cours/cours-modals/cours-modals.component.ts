import { Component, OnInit } from '@angular/core';
import { Cours } from '../models/cours';
import { BsModalRef } from 'ngx-bootstrap';
import { CoursService } from '../services/cours.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cours-modals',
  templateUrl: './cours-modals.component.html',
  styleUrls: ['./cours-modals.component.css']
})
export class CoursModalsComponent implements OnInit {

  closeBtnName: string;
  courss: Cours;
  cours: any;

  constructor(
    public bsModalRef: BsModalRef,
    private service: CoursService,
    private alertify: AlertifyService,
    private router: Router,
    ) {}

  ngOnInit() {
  }

  deleteCours(cours: Cours) {
    this.service.deleteCoursById(cours.id).subscribe(res => {
      this.router.navigateByUrl('/CoursListComponent', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/calendars/list']);
    });
      this.alertify.succes('supprimé');
    });
  }

}
