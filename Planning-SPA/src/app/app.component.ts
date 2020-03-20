import { slideInAnimation } from './animations';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './view/_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  title = 'Planning';
  jwtHelper = new JwtHelperService();

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  onActivate() {
    window.scroll(0, 0);
}

}
