import { ClasseService } from './../../classe/services/classe.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Eleve } from '../models/eleve';
import { EleveService, EleveService2 } from '../services/eleve.service';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Classe } from '../../classe/models/classe';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-eleve-list',
  templateUrl: './eleve-list.component.html',
  styleUrls: ['./eleve-list.component.css']
})

export class EleveListComponent implements OnInit {

  eleves: Eleve[] = [];
  classes: Classe[] = [];
  id: number;
  eleve: Eleve;
  searchText: any;

  constructor(
    private service: EleveService,
    private service2: EleveService2,
    private modals: SimpleModalService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private classeService: ClasseService,
    private alterifyService: AlertifyService,


    ) {}

  ngOnInit() {
    this.service.getEleve().subscribe(
      response => {
        this.eleves = response;
        this.classeService.getClasse().subscribe(classes => {
          this.classes = classes;
          this.eleves.forEach(c => {
            const classe = this.classes.find(n => n.id === c.classeId);
            c.classeName = classe.nom;
        });
        });
      });
  }

  searchByName(name: string) {
    this.service.getByName(name).subscribe(res => {
      this.eleves = res;
    });
  }

  deleteEleve(eleve: Eleve) {
    this.modals
      .addModal(ModalConfirmComponent, {
        title: `Supprimer ${eleve.prenom} ${eleve.nom} ?`,
        message: 'Êtes-vous sûr de vouloir supprimer cet élève ?'
      })
      .subscribe(result => {
        if (result) {
          this.service.deleteEleveById(eleve.id).subscribe(res => {
            this.ngOnInit();
          });
        }
      });
  }

  openEleve(eleve: Eleve) {
    this.service2.pushObject(eleve);
    this.alterifyService.error('création terminée');

  }

  onEleveUpdated(eleve: Eleve) {
    this.service.putEleve(eleve.id, eleve).subscribe((result) => {
      this.ngOnInit();
    });
  }

  onEleveCreated(eleve: Eleve) {
    this.service.postEleve(eleve).subscribe(result => {
      // this.eleves.push(result);
      this.ngOnInit();

    });
  }

}
