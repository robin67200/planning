import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndisponibiliteListComponent } from './indisponibilite-list/indisponibilite-list.component';


export const routes: Routes = [
  {
  path: '',
  redirectTo: 'list',
  },

    {path: 'list', component: IndisponibiliteListComponent},

  ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class IndisponibilitesRoutingModule {}
