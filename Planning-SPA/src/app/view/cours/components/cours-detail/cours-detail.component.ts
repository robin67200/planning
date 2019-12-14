import { CoursService2 } from './../../services/cours.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cours } from '../../models/cours';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { CoursService } from '../../services/cours.service';
import { ProfService } from 'src/app/view/prof/services/prof.service';
import { MatiereService } from 'src/app/view/matiere/services/matiere.service';
import { Prof } from 'src/app/view/prof/models/prof';
import { Matiere } from 'src/app/view/matiere/models/matiere';

@Component({
  selector: 'app-cours-detail',
  templateUrl: './cours-detail.component.html',
  styleUrls: ['./cours-detail.component.css']
})
export class CoursDetailComponent implements OnInit {

  id: number;
  cours: Cours = new Cours('', '', new Date(),  new Date(), '', '', 0, 0);
  profs: Prof[] = [];
  matieres: Matiere[] = [];
  courss: Cours[]
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDetail = new EventEmitter<any>();

  constructor(
    route: ActivatedRoute,
    private service: CoursService,
    private service2: CoursService2,
    private profService: ProfService,
    private matiereService: MatiereService,

  ) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
   }

  ngOnInit() {
    this.service2.objectChanged().subscribe(courss => {
      this.cours = courss;
      this.profService.getProf().subscribe(profs => {
        this.profs = profs;
        this.matiereService.getMatiere().subscribe(matieres => {
          this.matieres = matieres;
          this.courss.forEach(c => {
              const prof = this.profs.find(n => n.id === c.professeurId);
              c.profName = prof.nom;
              const matiere = this.matieres.find(a => a.id === c.matiereId);
              c.matiereName = matiere.nom;
            });
          });
        });
    });
   }

  close() {
    this.onClose.emit(null);
  }
}
