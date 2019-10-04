import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annee } from '../models/annee';

@Injectable()
export class AnneeService {

constructor(private http: HttpClient) { }
getAnnee() {
  return this.http.get<Annee[]>('http://localhost:5000/api/annees');
}
getAnneeById(id: number) {
  return this.http.get<Annee>('http://localhost:5000/api/annees/' + id);
}
putAnnee(id: number, annee: any) {
  return this.http.put<Annee>('http://localhost:5000/api/annees/' + id, Annee);
}
postAnnee(annee: Annee) {
  return this.http.post<Annee>('http://localhost:5000/api/annees/', Annee);
}
deleteAnneById(id: number) {
  return this.http.delete<Annee>('http://localhost:5000/api/annees/' + id);
}

}
