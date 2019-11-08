import { NiveauListComponent } from './niveau-list/niveau-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
  path: '',
  redirectTo: 'list',
  },
    {path: 'list', component: NiveauListComponent},

  ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class NiveauxRoutingModule {}
