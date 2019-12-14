import { AlertifyService } from './../_services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router,
    private admin: AdminService) { }

  ngOnInit() {
    this.admin.getUsersWithRoles();
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.succes('Connection réussie !');
    }, error => {
      this.alertify.error('Echec connection');
    }, () => {
      this.router.navigate(['/classes']);

    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Deconnexion');
    this.router.navigate(['/home']);
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.succes('Inscription terminée !');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/classes']);
    });
  }

}
