import { EleveListComponent } from './eleve-list/eleve-list.component';
import { EleveDetailComponent } from './eleve-detail/eleve-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  {
  path: '',
  redirectTo: 'list',
  },
    // {path: 'create', component: },
    {path: 'detail/:id', component: EleveDetailComponent},
   // {path: 'edit/:id', component: JuryEditComponent},
    {path: 'list', component: EleveListComponent},
    // {path: 'detail/:id/delete/:id', component: AnneeModalsComponent},

  ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class ElevesRoutingModule {}
