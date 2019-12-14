import { Component, OnInit } from '@angular/core';
import { AuthService } from './view/_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  title = 'Planning-SPA';
  jwtHelper = new JwtHelperService();

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
  onActivate() {
    window.scroll(0, 0);
}

}
