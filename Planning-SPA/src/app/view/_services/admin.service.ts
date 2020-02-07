import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../member/_models/user';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

  getUsersWithRoles() {
    return this.http.get(this.baseUrl + 'admin/usersWithRoles');
  }

  updateUsersRoles(user: User, roles: {}) {
    return this.http.post(this.baseUrl + 'admin/editRoles/' + user.username, roles);
  }
}
