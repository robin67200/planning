import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoursDetailComponent } from './cours-detail/cours-detail.component';
import { CoursListComponent } from './cours-list/cours-list.component';

export const routes: Routes = [
  {
  path: '',
  redirectTo: 'list',
  },
    // {path: 'create', component: },
    {path: 'detail/:id', component: CoursDetailComponent},
   // {path: 'edit/:id', component: },
    {path: 'list', component: CoursListComponent},
    // {path: 'detail/:id/delete/:id', component: },

  ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class CoursRoutingModule {}
