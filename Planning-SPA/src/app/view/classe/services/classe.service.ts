import { Classe } from './../models/classe';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/_services/crud.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { Subject } from 'rxjs';
import { Prof } from '../../prof/models/prof';
import { Cours } from '../../cours/models/cours';
import { environment } from 'src/environments/environment';

@Injectable()
export class ClasseService {
  protected $object: Subject<Classe> = new Subject<Classe>();
  baseUrl = environment.apiUrl + 'classes/';

constructor(private http: HttpClient) { }
getClasse() {
  return this.http.get<Classe[]>(this.baseUrl);
}
getClasseById(id: number) {
  return this.http.get<Classe>(this.baseUrl + id);
}
putClasse(id: number, classe: any) {
  return this.http.put<Classe>(this.baseUrl + id, classe);
}
postClasse(classe: Classe) {
  return this.http.post<Classe>(this.baseUrl + 'perso/', classe);
}
deleteClasseById(id: number) {
  return this.http.delete<Classe>(this.baseUrl + id);
}
getProfs(id: number) {
  return this.http.get<Prof[]>(this.baseUrl + id + 'profs/classe');
}
getCoursAvailable(id: number) {
  return this.http.get<Cours[]>(this.baseUrl + id + 'cours/availables');
}
addCours(id: number, coursId: number) {
  return this.http.put<Cours>(this.baseUrl + `${id}/cours/${coursId}`, null );
}
deleteCours(id: number, coursId: number) {
  return this.http.delete<Cours>(this.baseUrl + `${id}/cours/${coursId}`);
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
