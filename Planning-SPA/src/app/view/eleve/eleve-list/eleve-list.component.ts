import { SimpleModalService } from 'ngx-simple-modal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Eleve } from '../models/eleve';
import { EleveService, EleveService2 } from '../services/eleve.service';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-eleve-list',
  templateUrl: './eleve-list.component.html',
  styleUrls: ['./eleve-list.component.css']
})

export class EleveListComponent implements OnInit {

  eleves: Eleve[] = [];
  id: number;
  eleve: Eleve;
  searchText: any;
  displayedColumns: string[] =  ['nom', 'prenom', 'dateNaissance', 'adresse', 'mail', 'telephone', 'classeId', 'actions'];
  dataSource: MatTableDataSource<Eleve>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private service: EleveService,
    private service2: EleveService2,
    private modals: SimpleModalService,
    private route: ActivatedRoute,
    private http: HttpClient,

    ) {}

  ngOnInit() {
    this.service.getEleve().subscribe(
      response => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
