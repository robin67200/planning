import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModalConfirmComponent } from '../components/modals/confirm-modal';
import { SimpleModalService } from 'ngx-simple-modal';

@Injectable()
export class CrudService<T, TKey> {
  protected baseUrl: string;
  protected controller: string;
  protected url: string;

  protected $id: Subject<TKey> = new Subject<TKey>();
  protected $object: Subject<T> = new Subject<T>();
  protected $objects: Subject<T[]> = new Subject<T[]>();

  constructor(protected http: HttpClient, protected modals: SimpleModalService) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl + this.controller).pipe(
      map(response => {
        const datas = response;
        this.$objects.next(datas);
        return datas;
      })
    );
  }

  getById(id: TKey): Observable<T> {
    return this.http.get<T>(this.baseUrl + this.controller + '/' + id).pipe(
      map(response => {
        this.$id.next(id);
        this.$object.next(response);
        return response;
      })
    );
  }

  add(model: T) {
    return this.http.post<T>(this.baseUrl + this.controller, model);
  }

  update(id: TKey, model: T) {
    return this.http.put<T>(this.baseUrl + this.controller + '/' + id, model);
  }

  delete(id: TKey) {
    return new Observable<boolean>(obs => {
      this.modals
      .addModal(ModalConfirmComponent, {
        title: `Suppression ?`,
        message: 'Êtes-vous sûr de vouloir supprimer cet élément ?'
      })
      .subscribe(result => {
        if (result) {
          this.http.delete(this.baseUrl + this.controller + '/' + id).subscribe(res => {
            obs.next(true);
          });
        }
      });
    });

  }

  idChanged() {
    return this.$id.asObservable();
  }

  objectChanged() {
    return this.$object.asObservable();
  }

  objectsChanged() {
    return this.$objects.asObservable();
  }

  pushObject(object: T) {
    this.$object.next(object);
  }
  pushObjects(objects: Array<T>) {
    this.$objects.next(objects);
  }
}

export interface ICrudService<T, TKey> {
  getAll(): Observable<T[]>;
  getById(id: TKey): Observable<T>;
  add(model: T): Observable<Response>;
  update(id: TKey, model: T): Observable<Response>;
  delete(id: TKey): Observable<Response>;
  pushObject(object: T);
  pushObjects(objects: Array<T>);
}

export interface ISimpleCrudItem<TKey> {
  id: TKey;
  nom: string;
}
export class SimpleCrudItem<TKey> implements ISimpleCrudItem<TKey> {
  constructor(public id: TKey, public nom: string) {}
}
