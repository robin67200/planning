import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Indisponibilite } from '../models/indisponibilite';
import { CrudService } from 'src/app/_services/crud.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { Subject } from 'rxjs';

@Injectable()
export class IndisponibiliteService {


constructor(private http: HttpClient) { }
getIndisponibilites() {
  return this.http.get<Indisponibilite[]>('http://localhost:5000/api/indisponibilites');
}
getByDateToday() {
  return this.http.get<Indisponibilite[]>('http://localhost:5000/api/indisponibilites/date');
}
getIndisponibiliteById(id: number) {
  return this.http.get<Indisponibilite>('http://localhost:5000/api/indisponibilites/' + id);
}
putIndisponibilite(id: number, indisponibilite: any) {
  return this.http.put<Indisponibilite>('http://localhost:5000/api/indisponibilites/' + id, indisponibilite);
}
postIndisponibilite(indisponibilite: Indisponibilite) {
  return this.http.post<Indisponibilite>('http://localhost:5000/api/indisponibilites/', indisponibilite);
}
deleteIndisponibiliteById(id: number) {
  return this.http.delete<Indisponibilite>('http://localhost:5000/api/indisponibilites/' + id);
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
