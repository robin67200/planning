import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annee } from '../models/annee';
import { CrudService } from 'src/app/_services/crud.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { environment } from 'src/environments/environment';

@Injectable()
export class AnneeService {

baseUrl = environment.apiUrl + 'annees/';

constructor(private http: HttpClient) { }
getAnnee() {
  return this.http.get<Annee[]>(this.baseUrl);
}
getAnneeById(id: number) {
  return this.http.get<Annee>(this.baseUrl + id);
}
putAnnee(id: number, annee: any) {
  return this.http.put<Annee>(this.baseUrl + id, annee);
}
postAnnee(annee: Annee) {
  return this.http.post<Annee>(this.baseUrl + 'perso/', annee);
}
deleteAnneById(id: number) {
  return this.http.delete<Annee>(this.baseUrl + id);
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
