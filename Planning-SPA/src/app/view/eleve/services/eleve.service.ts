import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eleve } from '../models/eleve';
import { CrudService } from 'src/app/_services/crud.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { AppSettings } from 'src/app/model/app-settings';

@Injectable()
export class EleveService {

constructor(private http: HttpClient) { }
  getEleve() {
    return this.http.get<Eleve[]>('http://localhost:5000/api/eleves');
  }
  getEleveById(id: number) {
    return this.http.get<Eleve>('http://localhost:5000/api/eleves/' + id);
  }
  putEleve(id: number, eleve: any) {
    return this.http.put<Eleve>('http://localhost:5000/api/eleves/' + id, eleve);
  }
  postEleve(eleve: Eleve) {
    return this.http.post<Eleve>('http://localhost:5000/api/eleves/', eleve);
  }
  deleteEleveById(id: number) {
    return this.http.delete<Eleve>('http://localhost:5000/api/eleves/' + id);
  }
}

export class EleveService2 extends CrudService<Eleve, number> {
constructor(protected http: HttpClient, protected modals: SimpleModalService) {
    super(http, modals);
    // this.baseUrl = AppSettings.settings.ApiUrl;
    this.controller = 'eleves';
    // this.url = `${this.baseUrl}${this.controller}/`;
  }
}
