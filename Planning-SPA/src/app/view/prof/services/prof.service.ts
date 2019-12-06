
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prof } from '../models/prof';
import { CrudService } from 'src/app/_services/crud.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { Matiere } from '../../matiere/models/matiere';
import { Classe } from '../../classe/models/classe';

@Injectable()
export class ProfService {

constructor(private http: HttpClient) { }
getProf() {
  return this.http.get<Prof[]>('http://localhost:5000/api/profs');
}
getProfById(id: number) {
  return this.http.get<Prof>('http://localhost:5000/api/profs/' + id);
}
putProf(id: number, prof: any) {
  return this.http.put<Prof>('http://localhost:5000/api/profs/' + id, prof);
}
postProf(prof: Prof) {
  return this.http.post<Prof>('http://localhost:5000/api/profs/', prof);
}
deleteProfById(id: number) {
  return this.http.delete<Prof>('http://localhost:5000/api/profs/' + id);
}
getByName(nom: string) {
  return this.http.get<Prof[]>('http://localhost:5000/api/eleves/nom' + nom);
}
getMatiere(id: number) {
  return this.http.get<Matiere[]>('http://localhost:5000/api/profs/' + id + '/matieres/prof');
}
getMatieresAvailable(id: number) {
  return this.http.get<Matiere[]>('http://localhost:5000/api/profs/' + id + '/matieres/availables');
}
getClasse(id: number) {
  return this.http.get<Classe[]>('http://localhost:5000/api/profs/' + id + '/classes/prof');
}
getClasseAvailable(id: number) {
  return this.http.get<Classe[]>('http://localhost:5000/api/profs/' + id + '/classes/availables');
}
addMatiere(id: number, matiereId: number) {
  return this.http.put<Matiere>('http://localhost:5000/api/profs' + `/${id}/matieres/${matiereId}`, null );
}
deleteMatiere(id: number, matiereId: number) {
  return this.http.delete<Matiere>('http://localhost:5000/api/profs' + `/${id}/matieres/${matiereId}`);
}
addClasse(id: number, classeId: number) {
  return this.http.put<Classe>('http://localhost:5000/api/profs' + `/${id}/classes/${classeId}`, null );
}
deleteClasse(id: number, classeId: number) {
  return this.http.delete<Classe>('http://localhost:5000/api/profs' + `/${id}/classes/${classeId}`);
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
