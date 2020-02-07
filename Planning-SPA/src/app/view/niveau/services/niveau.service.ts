import { Niveau } from './../models/niveau';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/_services/crud.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { environment } from 'src/environments/environment';

@Injectable()
export class NiveauService {

baseUrl = environment.apiUrl + 'niveaux/';


constructor(private http: HttpClient) { }
getNiveau() {
  return this.http.get<Niveau[]>(this.baseUrl);
}
getNiveauById(id: number) {
  return this.http.get<Niveau>(this.baseUrl + id);
}
putNiveau(id: number, niveau: any) {
  return this.http.put<Niveau>(this.baseUrl + id, niveau);
}
postNiveau(niveau: Niveau) {
  return this.http.post<Niveau>(this.baseUrl + 'perso/', niveau);
}
deleteNiveauById(id: number) {
  return this.http.delete<Niveau>(this.baseUrl + id);
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
