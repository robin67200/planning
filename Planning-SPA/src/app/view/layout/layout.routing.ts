import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
      { path: '', component: LayoutComponent, children: [
        { path: 'admin', loadChildren: '../admin/admin.module#AdminModule'},
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'home', loadChildren: '../home/home.module#HomeModule' },
        { path: 'about', loadChildren: '../about/about.module#AboutModule' }
      ]}
    ];

export const ROUTES = RouterModule.forChild(routes);
