import { Niveau } from './../../niveau/models/niveau';
import { AnneeService } from './../../annee/services/annee.service';
import { Annee } from './../../annee/models/annee';
import { ClasseService, ClasseService2 } from './../services/classe.service';
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Classe } from '../models/classe';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { NiveauService } from '../../niveau/services/niveau.service';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-classe-list',
  templateUrl: './classe-list.component.html',
  styleUrls: ['./classe-list.component.css'],

})
export class ClasseListComponent implements OnInit {

  classe: Classe;
  searchText: any;

  classes: Classe[] = [];
  niveaux: Niveau[] = [];
  annees: Annee[] = [];


  constructor(
    private service: ClasseService,
    private service2: ClasseService2,
    private modals: SimpleModalService,
    private niveauService: NiveauService,
    private anneeService: AnneeService,
    private alertify: AlertifyService
    ) { }

  ngOnInit() {
    this.service.getClasse().subscribe(response => {
      this.classes = response;
      this.niveauService.getNiveau().subscribe(niveaux => {
        this.niveaux = niveaux;
        console.log(niveaux);
        this.anneeService.getAnnee().subscribe(annees => {
          this.annees = annees;
          console.log(annees);
          this.classes.forEach(c => {
            const niveau = this.niveaux.find(n => n.id === c.niveauId);
            c.niveauName = niveau.nom;
            const annee = this.annees.find(a => a.id === c.anneeId);
            c.anneeName = annee.nom;
          });
        });
      });
    });
  }

  deleteClasse(classe: Classe) {
    this.modals
      .addModal(ModalConfirmComponent, {
        title: `Supprimer ${classe.nom} ?`,
        message: 'Êtes-vous sûr de vouloir supprimer cette classe ?'
      })
      .subscribe(result => {
        if (result) {
          this.service.deleteClasseById(classe.id).subscribe(res => {
            this.ngOnInit();
          });
          this.alertify.succes('Supprimé');
        }
      });
  }

  openClasse(classe: Classe) {
    this.service2.pushObject(classe);
  }

  onClasseUpdated(classe: Classe) {
    this.service.putClasse(classe.id, classe).subscribe((result) => {
      this.ngOnInit();
    });
    this.alertify.succes('Modifié');
  }

  onClasseCreated(classe: Classe) {
    this.service.postClasse(classe).subscribe(result => {
      // this.classes.push(result);
      this.ngOnInit();
    });
    this.alertify.succes('Ajouté');
  }
}

