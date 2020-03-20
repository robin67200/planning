import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Matiere } from '../models/matiere';
import { CrudService } from 'src/app/_services/crud.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { environment } from 'src/environments/environment';

@Injectable()
export class MatiereService {

baseUrl = environment.apiUrl + 'matieres/';

constructor(private http: HttpClient) { }

getMatiere() {
  return this.http.get<Matiere[]>(this.baseUrl);
}
getMatiereById(id: number) {
  return this.http.get<Matiere>(this.baseUrl + id);
}
putMatiere(id: number, matiere: any) {
  return this.http.put<Matiere>(this.baseUrl + id, matiere);
}
postMatiere(matiere: Matiere) {
  return this.http.post<Matiere>(this.baseUrl + 'perso/', matiere);
}
deleteMatiereById(id: number) {
  return this.http.delete<Matiere>(this.baseUrl + id);
}

}

export class MatiereService2 extends CrudService<Matiere, number> {
  constructor(protected http: HttpClient, protected modals: SimpleModalService) {
      super(http, modals);
      // this.baseUrl = 'http://localhost:5000/api/';
      this.controller = 'matieres';
      this.url = `${this.baseUrl}${this.controller}/`;
    }
  }
