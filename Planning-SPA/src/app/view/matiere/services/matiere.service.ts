import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Matiere } from '../models/matiere';

@Injectable()
export class MatiereService {

constructor(private http: HttpClient) { }
getMatiere() {
  return this.http.get<Matiere[]>('http://localhost:5000/api/matieres');
}
getMatiereById(id: number) {
  return this.http.get<Matiere>('http://localhost:5000/api/matieres/' + id);
}
putMatiere(id: number, matiere: any) {
  return this.http.put<Matiere>('http://localhost:5000/api/matieres/' + id, matiere);
}
postMatiere(matiere: Matiere) {
  return this.http.post<Matiere>('http://localhost:5000/api/matieres/', matiere);
}
deleteAnneById(id: number) {
  return this.http.delete<Matiere>('http://localhost:5000/api/matieres/' + id);
}

}
