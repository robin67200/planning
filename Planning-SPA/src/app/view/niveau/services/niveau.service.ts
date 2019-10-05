import { Niveau } from './../models/niveau';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NiveauService {

constructor(private http: HttpClient) { }
getNiveau() {
  return this.http.get<Niveau[]>('http://localhost:5000/api/niveau');
}
getNiveauById(id: number) {
  return this.http.get<Niveau>('http://localhost:5000/api/niveau/' + id);
}
putNiveau(id: number, niveau: any) {
  return this.http.put<Niveau>('http://localhost:5000/api/niveau/' + id, niveau);
}
postNiveau(niveau: Niveau) {
  return this.http.post<Niveau>('http://localhost:5000/api/niveau/', niveau);
}
deleteNiveauById(id: number) {
  return this.http.delete<Niveau>('http://localhost:5000/api/niveau/' + id);
}

}
