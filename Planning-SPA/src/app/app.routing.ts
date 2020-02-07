import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { AuthGuard } from './view/_guards/auth.guard';
import { AdminPanelComponent } from './view/admin/admin-panel/admin-panel.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'annees',
        loadChildren: './view/annee/annee.module#AnneeModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'profs',
        loadChildren: './view/prof/prof.module#ProfModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'calendars',
        loadChildren: './view/cours/cours.module#CoursModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'classes',
        loadChildren: './view/classe/classe.module#ClasseModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'eleves',
        loadChildren: './view/eleve/eleve.module#EleveModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'niveaux',
        loadChildren: './view/niveau/niveau.module#NiveauModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'matieres',
        loadChildren: './view/matiere/matiere.module#MatiereModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'indisponibilites',
        loadChildren: './view/indisponibilite/indisponibilite.module#IndisponibiliteModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'members',
        loadChildren: './view/member/member.module#MemberModule',
        canActivate: [AuthGuard],
     },
     {
        path: 'admin',
        component: AdminPanelComponent,
        data: {roles: ['Admin', 'Moderator']},

     }
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
