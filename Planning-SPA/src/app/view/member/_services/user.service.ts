
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getUsers() {
  return this.http.get<User[]>(this.baseUrl + 'users/');
}

getUserById(id: number) {
  return this.http.get<User>(this.baseUrl + 'users/' + id);
}

deleteUserfById(id: number) {
  return this.http.delete<User>(this.baseUrl + 'users/' + id);
}

}
