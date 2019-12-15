import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Matiere } from '../models/matiere';
import { CrudService } from 'src/app/_services/crud.service';
import { SimpleModalService } from 'ngx-simple-modal';

@Injectable()
export class MatiereService {

constructor(private http: HttpClient) { }
getMatiere() {
  return this.http.get<Matiere[]>('http://localhost:5000/api/matieres');
}
getMatiereById(id: number) {
  return this.http.get<Matiere>('http://localhost:5000/api/matieres/' + id);
}
putMatiere(id: number, matiere: any) {
  return this.http.put<Matiere>('http://localhost:5000/api/matieres/' + id, matiere);
}
postMatiere(matiere: Matiere) {
  return this.http.post<Matiere>('http://localhost:5000/api/matieres/', matiere);
}
deleteMatiereById(id: number) {
  return this.http.delete<Matiere>('http://localhost:5000/api/matieres/' + id);
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
