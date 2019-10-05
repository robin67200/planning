
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClasseDetailComponent } from './classe-detail/classe-detail.component';
import { ClasseListComponent } from './classe-list/classe-list.component';

export const routes: Routes = [
  {
  path: '',
  redirectTo: 'list',
  pathMatch : 'prefix'
  },
    // {path: 'create', component: },
    {path: 'detail/:id', component: ClasseDetailComponent},
   // {path: 'edit/:id', component: JuryEditComponent},
    {path: 'list', component: ClasseListComponent},
    // {path: 'detail/:id/delete/:id', component: AnneeModalsComponent},

  ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class ClassesRoutingModule {}
