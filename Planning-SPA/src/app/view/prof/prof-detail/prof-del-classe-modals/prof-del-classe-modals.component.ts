import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Classe } from 'src/app/view/classe/models/classe';
import { BsModalRef } from 'ngx-bootstrap';
import { ProfService } from '../../services/prof.service';
import { ClasseService } from 'src/app/view/classe/services/classe.service';
import { AlertifyService } from 'src/app/view/_services/alertify.service';
import { Router } from '@angular/router';
import { Prof } from '../../models/prof';

@Component({
  selector: 'app-prof-del-classe-modals',
  templateUrl: './prof-del-classe-modals.component.html',
  styleUrls: ['./prof-del-classe-modals.component.css']
})
export class ProfDelClasseModalsComponent implements OnInit {

  @Output() delClasse = new EventEmitter();

  closeBtnName: string;
  classes: Classe;
  classe: any;
  prof: any;

  constructor(
    public bsModalRef: BsModalRef,
    private service: ProfService,
    private serviceClasse: ClasseService,
    private alertify: AlertifyService,
    private router: Router,
    ) {}

  ngOnInit() {}

  deleteClasse(prof: Prof, classe: Classe) {
    this.service.deleteClasse(prof.id, classe.id).subscribe(res => {
      this.router.navigateByUrl('/ProfDetailComponent', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/profs/detail/' + prof.id]);
    });
      this.alertify.succes('supprimé');
    });
  }

}

