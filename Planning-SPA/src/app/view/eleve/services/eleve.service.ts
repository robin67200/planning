import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eleve } from '../models/eleve';

@Injectable()
export class EleveService {

constructor(private http: HttpClient) { }
getEleve() {
  return this.http.get<Eleve[]>('http://localhost:5000/api/eleves');
}
getEleveById(id: number) {
  return this.http.get<Eleve>('http://localhost:5000/api/eleves/' + id);
}
putEleve(id: number, eleve: any) {
  return this.http.put<Eleve>('http://localhost:5000/api/eleves/' + id, eleve);
}
postEleve(eleve: Eleve) {
  return this.http.post<Eleve>('http://localhost:5000/api/eleves/', eleve);
}
deleteEleveById(id: number) {
  return this.http.delete<Eleve>('http://localhost:5000/api/eleves/' + id);
}

}
