import { Component, OnInit } from '@angular/core';
import { Prof } from '../../models/prof';
import { Classe } from 'src/app/view/classe/models/classe';
import { BsModalRef } from 'ngx-bootstrap';
import { ProfService } from '../../services/prof.service';
import { MatiereService } from 'src/app/view/matiere/services/matiere.service';
import { AlertifyService } from 'src/app/view/_services/alertify.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Matiere } from 'src/app/view/matiere/models/matiere';
import { ClasseService } from 'src/app/view/classe/services/classe.service';

@Component({
  selector: 'app-prof-add-classe-modals',
  templateUrl: './prof-add-classe-modals.component.html',
  styleUrls: ['./prof-add-classe-modals.component.css']
})
export class ProfAddClasseModalsComponent implements OnInit {

  profs: Prof;
  prof: any;
  items: any;
  id: number;
  classe: any;
  classes: Classe[];

  constructor(
    public bsModalRef: BsModalRef,
    private service: ProfService,
    private serviceClasse: ClasseService,
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
    this.service.getClasseAvailable(this.prof.id).subscribe((res) => {
      this.classes = res;
    });
  }

  AddClasseByProf(classe: Classe) {
    this.serviceClasse.getClasseById(classe.id).subscribe(res => {
      this.classe = res;
      this.service.addClasse(this.prof.id, this.classe.id).subscribe(_RES => {
        this.router.navigateByUrl('/ProfDetailComponent', { skipLocationChange: true}).then(() => {
          this.router.navigate(['/profs/detail/' + this.prof.id]);
      });
    });
      this.alertify.succes('Ajouté');
    });

  }

}
