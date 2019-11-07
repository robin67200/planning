import { AnneeListComponent } from './annee-list/annee-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
  path: '',
  redirectTo: 'list',
  },
    {path: 'list', component: AnneeListComponent},

  ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class AnneesRoutingModule {}
