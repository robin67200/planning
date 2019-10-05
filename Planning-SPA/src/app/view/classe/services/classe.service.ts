import { Classe } from './../models/classe';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClasseService {

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

}
