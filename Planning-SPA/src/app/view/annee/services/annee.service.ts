import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annee } from '../models/annee';
import { CrudService } from 'src/app/_services/crud.service';
import { SimpleModalService } from 'ngx-simple-modal';

@Injectable()
export class AnneeService {

constructor(private http: HttpClient) { }
getAnnee() {
  return this.http.get<Annee[]>('http://localhost:5000/api/annees');
}
getAnneeById(id: number) {
  return this.http.get<Annee>('http://localhost:5000/api/annees/' + id);
}
putAnnee(id: number, annee: any) {
  return this.http.put<Annee>('http://localhost:5000/api/annees/' + id, annee);
}
postAnnee(annee: Annee) {
  return this.http.post<Annee>('http://localhost:5000/api/annees/', annee);
}
deleteAnneById(id: number) {
  return this.http.delete<Annee>('http://localhost:5000/api/annees/' + id);
}

}

export class AnneeService2 extends CrudService<Annee, number> {
  constructor(protected http: HttpClient, protected modals: SimpleModalService) {
      super(http, modals);
      // this.baseUrl = 'http://localhost:5000/api/';
      this.controller = 'annees';
      this.url = `${this.baseUrl}${this.controller}/`;
    }


  }
