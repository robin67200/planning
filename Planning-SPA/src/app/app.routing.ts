import { CoursListComponent } from './view/cours/cours-list/cours-list.component';
import { CoursDetailComponent } from './view/cours/cours-detail/cours-detail.component';
import { ClasseListComponent } from './view/classe/classe-list/classe-list.component';
import { ClasseDetailComponent } from './view/classe/classe-detail/classe-detail.component';
import { AnneeDetailComponent } from './view/annee/annee-detail/annee-detail.component';
import { AnneeListComponent } from './view/annee/annee-list/annee-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfDetailComponent } from './view/prof/prof-detail/prof-detail.component';
import { ProfListComponent } from './view/prof/prof-list/prof-list.component';

export const routes: Routes = [
  {path: 'profs/detail/:id', component: ProfDetailComponent},
  {path: 'profs', component: ProfListComponent},

  {path: 'classes/detail/:id', component: ClasseDetailComponent},
  {path: 'classes', component: ClasseListComponent},

  {path: 'cours/detail/:id', component: CoursDetailComponent},
  {path: 'cours', component: CoursListComponent},

  {path: 'annees', component: AnneeListComponent},
  {path: 'annees/detail/:id', component: AnneeDetailComponent},
  { path: '', redirectTo: 'nav', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
