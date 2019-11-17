import { Classe } from './../models/classe';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/_services/crud.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { Subject } from 'rxjs';
import { Prof } from '../../prof/models/prof';

@Injectable()
export class ClasseService {
  protected $object: Subject<Classe> = new Subject<Classe>();

constructor(private http: HttpClient) { }
getClasse() {
  return this.http.get<Classe[]>('http://localhost:5000/api/classes');
}
getClasseById(id: number) {
  return this.http.get<Classe>('http://localhost:5000/api/classes/' + id);
}
putClasse(id: number, classe: any) {
  return this.http.put<Classe>('http://localhost:5000/api/classes/' + id, classe);
}
postClasse(classe: Classe) {
  return this.http.post<Classe>('http://localhost:5000/api/classes/', classe);
}
deleteClasseById(id: number) {
  return this.http.delete<Classe>('http://localhost:5000/api/classes/' + id);
}
getProfs(id: number) {
  return this.http.get<Prof[]>('http://localhost:5000/api/classes/' + id + '/profs/classe');
}

}

export class ClasseService2 extends CrudService<Classe, number> {
  constructor(protected http: HttpClient, protected modals: SimpleModalService) {
      super(http, modals);
      // this.baseUrl = 'http://localhost:5000/api/';
      this.controller = 'classes';
      this.url = `${this.baseUrl}${this.controller}/`;
    }


  }
