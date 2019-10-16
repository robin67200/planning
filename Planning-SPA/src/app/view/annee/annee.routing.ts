import { AnneeListComponent } from './annee-list/annee-list.component';
import { AnneeDetailComponent } from './annee-detail/annee-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
  path: '',
  redirectTo: 'list',
  },
    // {path: 'create', component: },
    {path: 'detail/:id', component: AnneeDetailComponent},
   // {path: 'edit/:id', component: JuryEditComponent},
    {path: 'list', component: AnneeListComponent},
    // {path: 'detail/:id/delete/:id', component: AnneeModalsComponent},

  ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class AnneesRoutingModule {}
