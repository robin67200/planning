import { ProfService } from 'src/app/view/prof/services/prof.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Matiere } from 'src/app/view/matiere/models/matiere';
import { BsModalRef } from 'ngx-bootstrap';
import { MatiereService } from 'src/app/view/matiere/services/matiere.service';
import { AlertifyService } from 'src/app/view/_services/alertify.service';
import { Router } from '@angular/router';
import { Prof } from '../../models/prof';

@Component({
  selector: 'app-prof-del-matiere-modals',
  templateUrl: './prof-del-matiere-modals.component.html',
  styleUrls: ['./prof-del-matiere-modals.component.css']
})
export class ProfDelMatiereModalsComponent implements OnInit {

  @Output() delMatiere = new EventEmitter();

  closeBtnName: string;
  matieres: Matiere;
  matiere: any;
  prof: any;

  constructor(
    public bsModalRef: BsModalRef,
    private service: ProfService,
    private serviceMatiere: MatiereService,
    private alertify: AlertifyService,
    private router: Router,
    ) {}

  ngOnInit() {}

  deleteMatiere(prof: Prof, matiere: Matiere) {
    this.service.deleteMatiere(prof.id, matiere.id).subscribe(res => {
      this.router.navigateByUrl('/ProfDetailComponent', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/profs/detail/' + prof.id]);
    });
      this.alertify.succes('supprimé');
    });
  }

}
