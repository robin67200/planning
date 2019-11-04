import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cours } from '../models/cours';
import { CrudService } from 'src/app/_services/crud.service';
import { SimpleModalService } from 'ngx-simple-modal';

@Injectable()
export class CoursService {

constructor(private http: HttpClient) { }
getCours() {
  return this.http.get<Cours[]>('http://localhost:5000/api/cours');
}
getCoursById(id: number) {
  return this.http.get<Cours>('http://localhost:5000/api/cours/' + id);
}
putCours(id: number, cours: any) {
  return this.http.put<Cours>('http://localhost:5000/api/cours/' + id, cours);
}
postCours(cours: Cours) {
  return this.http.post<Cours>('http://localhost:5000/api/cours/', cours);
}
deleteAnneById(id: number) {
  return this.http.delete<Cours>('http://localhost:5000/api/cours/' + id);
}

}

export class CoursService2 extends CrudService<Cours, number> {
  constructor(protected http: HttpClient, protected modals: SimpleModalService) {
      super(http, modals);
      // this.baseUrl = AppSettings.settings.ApiUrl;
      this.controller = 'cours';
      // this.url = `${this.baseUrl}${this.controller}/`;
    }
  }
