import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Indisponibilite } from '../models/indisponibilite';
import { CrudService } from 'src/app/_services/crud.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class IndisponibiliteService {

baseUrl = environment.apiUrl + 'indisponibilites/';

constructor(private http: HttpClient) { }
getIndisponibilites() {
  return this.http.get<Indisponibilite[]>(this.baseUrl);
}
getByDateToday() {
  return this.http.get<Indisponibilite[]>(this.baseUrl);
}
getIndisponibiliteById(id: number) {
  return this.http.get<Indisponibilite>(this.baseUrl + id);
}
putIndisponibilite(id: number, indisponibilite: any) {
  return this.http.put<Indisponibilite>(this.baseUrl + id, indisponibilite);
}
putIndisponibiliteWithControl(id: number, indisponibilite: any) {
  return this.http.put<Indisponibilite>(this.baseUrl + 'control/' + id, indisponibilite);
}
postIndisponibilite(indisponibilite: Indisponibilite) {
  return this.http.post<Indisponibilite>(this.baseUrl + 'perso/', indisponibilite);
}
postIndisponibiliteWithControl(indisponibilite: Indisponibilite) {
  return this.http.post<Indisponibilite>(this.baseUrl + 'control/', indisponibilite);
}
deleteIndisponibiliteById(id: number) {
  return this.http.delete<Indisponibilite>(this.baseUrl + id);
}
searchDate(date: Date) {
  return this.http.get<Indisponibilite[]>(this.baseUrl + 'search?date=' + date);
}
searchByProf(profId: number) {
  return this.http.get<Indisponibilite[]>(this.baseUrl + 'prof/' + profId);
}

}

/* export class IndisponibiliteService2 extends CrudService<Indisponibilite, number> {
  constructor(protected http: HttpClient, protected modals: SimpleModalService) {
      super(http, modals);
      this.controller = 'indisponibilites';
      this.url = `${this.baseUrl}${this.controller}/`;
    }


} */

export class IndisponibiliteService3<T, TKey> {
  public $id: Subject<TKey> = new Subject<TKey>();
  protected $object: Subject<T> = new Subject<T>();

  constructor() {
    }

    objectChanged() {
      return this.$object.asObservable();
    }

    pushObject(object: T) {
      this.$object.next(object);
    }

}
