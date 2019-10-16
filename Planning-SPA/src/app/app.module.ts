import { ModalSimpleInputComponent } from './components/modals/simple-input-modals';
import { ModalConfirmComponent } from './components/modals/confirm-modal';
import { ClasseService } from './view/classe/services/classe.service';
import { AnneeService } from './view/annee/services/annee.service';
import { AnneeListComponent } from './view/annee/annee-list/annee-list.component';
import { AnneeDetailComponent } from './view/annee/annee-detail/annee-detail.component';
import { NavComponent } from './view/nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppSharedModule } from './app-shared.module';
import { AppRoutingModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, BsDatepickerModule, TabsModule, ModalModule } from 'ngx-bootstrap';
import { SimpleModalModule } from 'ngx-simple-modal';
import { ModalItemSelectorComponent } from './components/modals/item-selector-modal';

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
      {
        path: 'courss',
        loadChildren: './view/cours/cours.module#CourssModule',
      },
      {
        path: 'classes',
        loadChildren: './view/classe/classe.module#ClasseModule',
      },
      {
        path: 'eleves',
        loadChildren: './view/eleve/eleve.module#ElevesModule',
      },
    ]
  },

  {path: '', redirectTo: 'nav', pathMatch: 'full'},


];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ModalConfirmComponent,
    ModalItemSelectorComponent,
    ModalSimpleInputComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    AppRoutingModule,
    SimpleModalModule.forRoot(
      { container: 'modal-container' },
      /*{
        closeOnEscape: true,
        closeOnClickOutside: true,
        bodyClass: 'modal-open',
        wrapperDefaultClasses: 'modal fade',
        wrapperClass: 'show',
        animationDuration: 300
      }*/
    )

  ],
  entryComponents: [ModalConfirmComponent, ModalItemSelectorComponent, ModalSimpleInputComponent],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
