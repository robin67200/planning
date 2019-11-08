
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prof } from '../models/prof';
import { CrudService } from 'src/app/_services/crud.service';
import { SimpleModalService } from 'ngx-simple-modal';

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

}

export class ProfService2 extends CrudService<Prof, number> {
  constructor(protected http: HttpClient, protected modals: SimpleModalService) {
      super(http, modals);
      // this.baseUrl = 'http://localhost:5000/api/';
      this.controller = 'profs';
      this.url = `${this.baseUrl}${this.controller}/`;
    }


  }
