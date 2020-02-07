
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prof } from '../models/prof';
import { CrudService } from 'src/app/_services/crud.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { Matiere } from '../../matiere/models/matiere';
import { Classe } from '../../classe/models/classe';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProfService {

baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }
getProf() {
  return this.http.get<Prof[]>(this.baseUrl + 'profs/new/');
}
getProfById(id: number) {
  return this.http.get<Prof>(this.baseUrl + 'profs/' + id);
}
putProf(id: number, prof: any) {
  return this.http.put<Prof>(this.baseUrl + 'profs/new/' + id, prof);
}
postProf(prof: Prof) {
  return this.http.post<Prof>(this.baseUrl + 'profs/perso/', prof);
}
deleteProfById(id: number) {
  return this.http.delete<Prof>(this.baseUrl + 'profs/' + id);
}
getByName(nom: string) {
  return this.http.get<Prof[]>(this.baseUrl + 'eleves/nom' + nom);
}
getMatiere(id: number) {
  return this.http.get<Matiere[]>(this.baseUrl + 'profs/' + id + '/matieres/prof');
}
getMatieresAvailable(id: number) {
  return this.http.get<Matiere[]>(this.baseUrl + 'profs/' + id + '/matieres/availables');
}
getClasse(id: number) {
  return this.http.get<Classe[]>(this.baseUrl + 'profs/' + id + '/classes/prof');
}
getClasseAvailable(id: number) {
  return this.http.get<Classe[]>(this.baseUrl + 'profs/' + id + '/classes/availables');
}
addMatiere(id: number, matiereId: number) {
  return this.http.put<Matiere>(this.baseUrl + 'profs/' + `${id}/matieres/${matiereId}`, null );
}
deleteMatiere(id: number, matiereId: number) {
  return this.http.delete<Matiere>(this.baseUrl + 'profs/' + `${id}/matieres/${matiereId}`);
}
addClasse(id: number, classeId: number) {
  return this.http.put<Classe>(this.baseUrl + 'profs/' + `${id}/classes/${classeId}`, null );
}
deleteClasse(id: number, classeId: number) {
  return this.http.delete<Classe>(this.baseUrl + 'profs/' + `${id}/classes/${classeId}`);
}


}

export class ProfService2 extends CrudService<Prof, number> {
  constructor(protected http: HttpClient, protected modals: SimpleModalService) {
      super(http, modals);
      // this.baseUrl = 'http://localhost:5000/api/';
      this.controller = 'profs';
      this.url = `${this.baseUrl}${this.controller}/`;
    }


  }
