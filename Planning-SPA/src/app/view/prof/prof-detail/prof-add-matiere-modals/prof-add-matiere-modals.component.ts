import { Matiere } from 'src/app/view/matiere/models/matiere';
import { MatiereService } from 'src/app/view/matiere/services/matiere.service';
import { Component, OnInit } from '@angular/core';
import { Prof } from '../../models/prof';
import { BsModalRef } from 'ngx-bootstrap';
import { ProfService } from '../../services/prof.service';
import { AlertifyService } from 'src/app/view/_services/alertify.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ListItem } from 'src/app/components/model/list-item';

@Component({
  selector: 'app-prof-add-matiere-modals',
  templateUrl: './prof-add-matiere-modals.component.html',
  styleUrls: ['./prof-add-matiere-modals.component.css']
})
export class ProfAddMatiereModalsComponent implements OnInit {

  profs: Prof;
  prof: any;
  items: any;
  id: number;
  matiere: any;
  matieres: Matiere[];

  constructor(
    public bsModalRef: BsModalRef,
    private service: ProfService,
    private serviceMatiere: MatiereService,
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
    this.service.getMatieresAvailable(this.prof.id).subscribe((res) => {
      this.matieres = res;
    });
  }

  AddMatiereByProf(matiere: Matiere) {
    this.serviceMatiere.getMatiereById(matiere.id).subscribe(res => {
      this.matiere = res;
      this.service.addMatiere(this.prof.id, this.matiere.id).subscribe(_RES => {
        this.router.navigateByUrl('/ProfDetailComponent', { skipLocationChange: true}).then(() => {
          this.router.navigate(['/profs/detail/' + this.prof.id]);
      });
    });
      this.alertify.succes('Ajouté');
    });

  }

}
