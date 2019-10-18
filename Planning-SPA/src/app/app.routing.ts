import { AnneeDetailComponent } from './view/annee/annee-detail/annee-detail.component';
import { AnneeListComponent } from './view/annee/annee-list/annee-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'myApp', loadChildren: './layout/layout.module#LayoutModule'//<- Other routes here
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
