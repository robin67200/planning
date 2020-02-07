import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eleve } from '../models/eleve';
import { CrudService } from 'src/app/_services/crud.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { AppSettings } from 'src/app/model/app-settings';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class EleveService {
  protected $object: Subject<Eleve> = new Subject<Eleve>();
  baseUrl = environment.apiUrl + 'eleves/';


constructor(private http: HttpClient) { }
  getEleve() {
    return this.http.get<Eleve[]>(this.baseUrl);
  }
  getEleveById(id: number) {
    return this.http.get<Eleve>(this.baseUrl + id);
  }
  putEleve(id: number, eleve: any) {
    return this.http.put<Eleve>(this.baseUrl + id, eleve);
  }
  postEleve(eleve: Eleve) {
    return this.http.post<Eleve>(this.baseUrl + 'perso/', eleve);
  }
  deleteEleveById(id: number) {
    return this.http.delete<Eleve>(this.baseUrl + id);
  }
  getByName(nom: string) {
    return this.http.get<Eleve[]>(this.baseUrl + nom);
  }
  pushObject(object: Eleve) {
    this.$object.next(object);
  }
}

export class EleveService2 extends CrudService<Eleve, number> {
constructor(protected http: HttpClient, protected modals: SimpleModalService) {
    super(http, modals);
    // this.baseUrl = 'http://localhost:5000/api/';
    this.controller = 'eleves';
    this.url = `${this.baseUrl}${this.controller}/`;
  }


}
