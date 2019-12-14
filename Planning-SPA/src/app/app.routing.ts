import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { AuthGuard } from './view/_guards/auth.guard';
import { AdminPanelComponent } from './view/admin/admin-panel/admin-panel.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'annees',
        loadChildren: './view/annee/annee.module#AnneesModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'profs',
        loadChildren: './view/prof/prof.module#ProfsModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'calendars',
        loadChildren: './view/cours/cours.module#CourssModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'classes',
        loadChildren: './view/classe/classe.module#ClasseModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'eleves',
        loadChildren: './view/eleve/eleve.module#ElevesModule',
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
        loadChildren: './view/user/member.module#MembersModule',
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
