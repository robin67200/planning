import { ClasseService } from './view/classe/services/classe.service';
import { CoursService } from './view/cours/services/cours.service';
import { CoursDetailComponent } from './view/cours/cours-detail/cours-detail.component';
import { CoursListComponent } from './view/cours/cours-list/cours-list.component';
import { ClasseListComponent } from './view/classe/classe-list/classe-list.component';
import { ClasseDetailComponent } from './view/classe/classe-detail/classe-detail.component';
import { ProfListComponent } from './view/prof/prof-list/prof-list.component';
import { AnneeService } from './view/annee/services/annee.service';
import { AnneeListComponent } from './view/annee/annee-list/annee-list.component';
import { AnneeDetailComponent } from './view/annee/annee-detail/annee-detail.component';
import { NavComponent } from './view/nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { AppSharedModule } from './app-shared.module';
import { AppRoutingModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, BsDatepickerModule, TabsModule, ModalModule } from 'ngx-bootstrap';
import { ProfService } from './view/prof/services/prof.service';
import { ProfDetailComponent } from './view/prof/prof-detail/prof-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'annees',
        loadChildren: './view/annee/annee.module#AnneesModule',
      },
      {
        path: 'profs',
        loadChildren: './view/prof/prof.module#ProfsModule',
      },
    ]
  },

  {path: '', redirectTo: 'nav', pathMatch: 'full'},


];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AnneeDetailComponent,
    AnneeListComponent,
    ProfDetailComponent,
    ProfListComponent,
    ClasseDetailComponent,
    ClasseListComponent,
    CoursListComponent,
    CoursDetailComponent

  ],
  imports: [
    BrowserModule,
    AppSharedModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AnneeService, ProfService, CoursService, ClasseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
