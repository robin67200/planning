import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cours } from '../models/cours';
import { CrudService } from 'src/app/_services/crud.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { environment } from 'src/environments/environment';

@Injectable()
export class CoursService {
  baseUrl = environment.apiUrl + 'cours/';

constructor(private http: HttpClient) { }
getCours() {
  return this.http.get<Cours[]>(this.baseUrl);
}
getCoursById(id: number) {
  return this.http.get<Cours>(this.baseUrl + id);
}
putCours(id: number, cours: any) {
  return this.http.put<Cours>(this.baseUrl + id, cours);
}
postCours(cours: Cours) {
  return this.http.post<Cours>(this.baseUrl + 'perso/', cours);
}
deleteCoursById(id: number) {
  return this.http.delete<Cours>(this.baseUrl + id);
}
addCoursWithControl(cours: Cours) {
  return this.http.post<Cours>(this.baseUrl + 'perso/', cours);
}
putCoursWithControl(id: number, cours: any) {
  return this.http.put<Cours>(this.baseUrl + 'control/' + id, cours);
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
