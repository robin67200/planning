import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatiereDetailComponent } from './matiere-detail/matiere-detail.component';
import { MatiereListComponent } from './matiere-list/matiere-list.component';

export const routes: Routes = [
  {
  path: '',
  redirectTo: 'list',
  pathMatch : 'prefix'
  },
    // {path: 'create', component: },
    {path: 'detail/:id', component: MatiereDetailComponent},
   // {path: 'edit/:id', component: JuryEditComponent},
    {path: 'list', component: MatiereListComponent},
    // {path: 'detail/:id/delete/:id', component: AnneeModalsComponent},

  ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class MatieresRoutingModule {}
