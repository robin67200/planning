import { ProfListComponent } from './prof-list/prof-list.component';
import { ProfDetailComponent } from './prof-detail/prof-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
  path: '',
  redirectTo: 'list',
  },
    // {path: 'create', component: },
    {path: 'detail/:id', component: ProfDetailComponent},
   // {path: 'edit/:id', component: },
    {path: 'list', component: ProfListComponent},
    // {path: 'detail/:id/delete/:id', component: },

  ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class ProfsRoutingModule {}
