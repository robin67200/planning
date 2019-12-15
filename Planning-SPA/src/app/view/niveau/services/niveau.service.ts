import { Niveau } from './../models/niveau';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/_services/crud.service';
import { SimpleModalService } from 'ngx-simple-modal';

@Injectable()
export class NiveauService {

constructor(private http: HttpClient) { }
getNiveau() {
  return this.http.get<Niveau[]>('http://localhost:5000/api/niveaux');
}
getNiveauById(id: number) {
  return this.http.get<Niveau>('http://localhost:5000/api/niveaux/' + id);
}
putNiveau(id: number, niveau: any) {
  return this.http.put<Niveau>('http://localhost:5000/api/niveaux/' + id, niveau);
}
postNiveau(niveau: Niveau) {
  return this.http.post<Niveau>('http://localhost:5000/api/niveaux/', niveau);
}
deleteNiveauById(id: number) {
  return this.http.delete<Niveau>('http://localhost:5000/api/niveaux/' + id);
}

}

export class NiveauService2 extends CrudService<Niveau, number> {
  constructor(protected http: HttpClient, protected modals: SimpleModalService) {
      super(http, modals);
      // this.baseUrl = 'http://localhost:5000/api/';
      this.controller = 'niveaux';
      this.url = `${this.baseUrl}${this.controller}/`;
    }


  }
