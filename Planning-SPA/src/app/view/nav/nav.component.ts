import { AlertifyService } from './../_services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

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
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.router.navigate(['/classes']);
      this.alertify.succes('Connection réussie !');
    }, error => {
      this.alertify.error('Echec connection');
    }, () => {

    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    this.router.navigate(['/home']);
    localStorage.removeItem('token');
    this.alertify.message('Deconnexion');
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.router.navigate(['/classes']);
      this.alertify.succes('Inscription terminée !');
    }, error => {
      this.alertify.error(error);
    }, () => {

    });
  }

}
