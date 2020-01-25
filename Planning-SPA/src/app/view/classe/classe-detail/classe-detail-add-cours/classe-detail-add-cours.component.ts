import { CoursService } from './../../../cours/services/cours.service';
import { Component, OnInit } from '@angular/core';
import { Classe } from '../../models/classe';
import { BsModalRef } from 'ngx-bootstrap';
import { ClasseService } from '../../services/classe.service';
import { AlertifyService } from 'src/app/view/_services/alertify.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Cours } from 'src/app/view/cours/models/cours';

@Component({
  selector: 'app-classe-detail-add-cours',
  templateUrl: './classe-detail-add-cours.component.html',
  styleUrls: ['./classe-detail-add-cours.component.css']
})
export class ClasseDetailAddCoursComponent implements OnInit {

  classes: Classe[];
  classe: any;
  items: any;
  id: number;
  courss: Cours[];
  cours: any;

  constructor(
    public bsModalRef: BsModalRef,
    private service: ClasseService,
    private serviceCours: CoursService,
    private alertify: AlertifyService,
    private router: Router,
    route: ActivatedRoute,

    ) {
      route.params.forEach((params: Params) => {
        if (params.id != null) {
          this.id = +params.id;
        }
      });
    }

  ngOnInit() {
    this.service.getCoursAvailable(this.classe.id).subscribe((res) => {
      this.courss = res;
    });
  }

  AddCoursByClasse(cours: Cours) {
    this.serviceCours.getCoursById(cours.id).subscribe(res => {
      this.cours = res;
      this.service.addCours(this.classe.id, cours.id).subscribe(res => {
        this.router.navigateByUrl('/ClasseDetailComponent', { skipLocationChange: true}).then(() => {
          this.router.navigate(['/classes/detail/' + this.classe.id]);
      });
    });
      this.alertify.succes('Ajouté');
    });

  }

}
