import { IndisponibiliteService } from 'src/app/view/indisponibilite/services/indisponibilite.service';
import { Indisponibilite } from 'src/app/view/indisponibilite/models/indisponibilite';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { AlertifyService } from '../../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indisponibilite-modals',
  templateUrl: './indisponibilite-modals.component.html',
  styleUrls: ['./indisponibilite-modals.component.css']
})
export class IndisponibiliteModalsComponent implements OnInit {

  closeBtnName: string;
  indisps: Indisponibilite;
  indisp: any;

  constructor(
    public bsModalRef: BsModalRef,
    private service: IndisponibiliteService,
    private alertify: AlertifyService,
    private router: Router,
    ) {}

  ngOnInit() {
  }

  deleteIndisp(indisp: Indisponibilite) {
    this.service.deleteIndisponibiliteById(indisp.id).subscribe(res => {
      this.router.navigateByUrl('/IndisponibiliteListComponent', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/indisponibilites/list']);
    });
      this.alertify.succes('supprimé');
    });
  }

}
