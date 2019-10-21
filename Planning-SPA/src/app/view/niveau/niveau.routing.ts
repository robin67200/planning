import { NiveauListComponent } from './niveau-list/niveau-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NiveauDetailComponent } from './niveau-detail/niveau-detail.component';

export const routes: Routes = [
  {
  path: '',
  redirectTo: 'list',
  },
    // {path: 'create', component: },
    {path: 'detail/:id', component: NiveauDetailComponent},
   // {path: 'edit/:id', component: JuryEditComponent},
    {path: 'list', component: NiveauListComponent},
    // {path: 'detail/:id/delete/:id', component: AnneeModalsComponent},

  ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class NiveauxRoutingModule {}
