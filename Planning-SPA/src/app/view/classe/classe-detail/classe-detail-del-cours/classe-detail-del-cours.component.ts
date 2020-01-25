import { Classe } from './../../models/classe';
import { ClasseService } from './../../services/classe.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cours } from 'src/app/view/cours/models/cours';
import { BsModalRef } from 'ngx-bootstrap';
import { ProfService } from 'src/app/view/prof/services/prof.service';
import { CoursService } from 'src/app/view/cours/services/cours.service';
import { AlertifyService } from 'src/app/view/_services/alertify.service';
import { Router } from '@angular/router';
import { Prof } from 'src/app/view/prof/models/prof';

@Component({
  selector: 'app-classe-detail-del-cours',
  templateUrl: './classe-detail-del-cours.component.html',
  styleUrls: ['./classe-detail-del-cours.component.css']
})
export class ClasseDetailDelCoursComponent implements OnInit {

  @Output() delCours = new EventEmitter();

  closeBtnName: string;
  courss: Cours;
  cours: any;
  classe: any;

  constructor(
    public bsModalRef: BsModalRef,
    private service: ClasseService,
    private serviceCours: CoursService,
    private alertify: AlertifyService,
    private router: Router,
    ) {}

  ngOnInit() {}

  deleteCours(classe: Classe, cours: Cours) {
    this.service.deleteCours(classe.id, cours.id).subscribe(res => {
      this.router.navigateByUrl('/ClasseDetailComponent', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/classes/detail/' + classe.id]);
    });
      this.alertify.succes('supprimé');
    });
  }

}
