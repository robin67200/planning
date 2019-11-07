import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatiereListComponent } from './matiere-list/matiere-list.component';

export const routes: Routes = [
  {
  path: '',
  redirectTo: 'list',
  },

    {path: 'list', component: MatiereListComponent},

  ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class MatieresRoutingModule {}
