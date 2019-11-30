import { ModalSimpleInputComponent } from './components/modals/simple-input-modals';
import { ModalConfirmComponent } from './components/modals/confirm-modal';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppSharedModule } from './app-shared.module';
import { AppRoutingModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, BsDatepickerModule, ModalModule } from 'ngx-bootstrap';
import { SimpleModalModule, SimpleModalOptions } from 'ngx-simple-modal';
import { ModalItemSelectorComponent } from './components/modals/item-selector-modal';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NavModule } from './view/nav/nav.module';
import { defaultSimpleModalOptions } from 'ngx-simple-modal/dist/simple-modal/simple-modal-options';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MAT_DATE_LOCALE } from '@angular/material';


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
        path: 'calendars',
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
      {
        path: 'niveaux',
        loadChildren: './view/niveau/niveau.module#NiveauModule',
      },
      {
        path: 'matieres',
        loadChildren: './view/matiere/matiere.module#MatiereModule',
      },
      {
        path: 'indisponibilites',
        loadChildren: './view/indisponibilite/indisponibilite.module#IndisponibiliteModule',
      }
    ]
  },

  {path: '', redirectTo: 'nav', pathMatch: 'full'},


];
@NgModule({
  declarations: [
    AppComponent,
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
    NavModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    SimpleModalModule.forRoot({container: 'modal-container'}, {...defaultSimpleModalOptions, ...{
      closeOnEscape: true,
      closeOnClickOutside: true,
      bodyClass: 'modal-open',
      wrapperDefaultClasses: 'modal fade',
      wrapperClass: 'show',
      animationDuration: 300,
    }}),
    MatSliderModule,
    MatSidenavModule,
    AngularFontAwesomeModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })

  ],
  entryComponents: [ModalConfirmComponent, ModalItemSelectorComponent, ModalSimpleInputComponent],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'FR'},
   ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
  overlayContainer: OverlayContainer) { overlayContainer.getContainerElement().classList.add('Planning'); } }
