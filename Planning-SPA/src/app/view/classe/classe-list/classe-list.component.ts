import { Niveau } from './../../niveau/models/niveau';
import { AnneeService } from './../../annee/services/annee.service';
import { Annee } from './../../annee/models/annee';
import { ClasseService, ClasseService2 } from './../services/classe.service';
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Classe } from '../models/classe';
import { SimpleModalService } from 'ngx-simple-modal';
import { ModalSimpleInputComponent } from 'src/app/components/modals/simple-input-modals';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { NiveauService } from '../../niveau/services/niveau.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-classe-list',
  templateUrl: './classe-list.component.html',
  styleUrls: ['./classe-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ClasseListComponent implements OnInit {

  classe: Classe;
  searchText: any;
  displayedColumns: string[] =  ['nom', 'niveauName', 'anneeName', 'actions'];
  dataSource: MatTableDataSource<Classe>;
  dataSource1: MatTableDataSource<Niveau>;
  dataSource2: MatTableDataSource<Annee>;

  classes: Classe[] = [];
  niveaux: Niveau[] = [];
  annees: Annee[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private service: ClasseService,
    private service2: ClasseService2,
    private modals: SimpleModalService,
    private niveauService: NiveauService,
    private anneeService: AnneeService
    ) { }

  ngOnInit() {
    this.service.getClasse().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
      this.niveauService.getNiveau().subscribe(niveaux => {
        this.dataSource1 = new MatTableDataSource(niveaux);
        console.log(niveaux);
        this.anneeService.getAnnee().subscribe(annees => {
          this.dataSource2 = new MatTableDataSource(annees);
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
  }

  onClasseCreated(classe: Classe) {
    this.service.postClasse(classe).subscribe(result => {
      // this.classes.push(result);
      this.ngOnInit();
    });
  }
}

