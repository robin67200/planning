import { Component, OnInit } from '@angular/core';
import { Classe } from '../models/classe';
import { BsModalRef } from 'ngx-bootstrap';
import { ClasseService } from '../services/classe.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classe-modals',
  templateUrl: './classe-modals.component.html',
  styleUrls: ['./classe-modals.component.css']
})
export class ClasseModalsComponent implements OnInit {

  closeBtnName: string;
  classes: Classe;
  classe: any;

  constructor(
    public bsModalRef: BsModalRef,
    private service: ClasseService,
    private alertify: AlertifyService,
    private router: Router,
    ) {}

  ngOnInit() {
  }

  deleteClasse(classe: Classe) {
    this.service.deleteClasseById(classe.id).subscribe(res => {
      this.router.navigateByUrl('/ClasseListComponent', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/classes/list']);
    });
      this.alertify.succes('Supprimé');
    });
  }
}
