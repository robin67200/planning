import { RolesModalComponent } from './view/admin/roles-modal/roles-modal.component';
import { AuthGuard } from './view/_guards/auth.guard';
import { AuthService } from './view/_services/auth.service';
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
import { HomeComponent } from './view/home/home.component';
import { NavComponent } from './view/nav/nav.component';
import { RegisterComponent } from './view/register/register.component';
import { UserService } from './view/user/_services/user.service';
import { AdminService } from './view/_services/admin.service';
import { AlertifyService } from './view/_services/alertify.service';
import { UserManagementComponent } from './view/admin/user-management/user-management.component';
import { AdminPanelComponent } from './view/admin/admin-panel/admin-panel.component';
import { TabsModule } from 'ngx-tabset';
import { HasRoleDirective } from './view/_directives/hasRole.directive';

export function tokenGetter() {
  return localStorage.getItem('token');
}

const appRoutes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
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
        data: {roles: ['Admin', 'Moderator']}
     }
    ]
  },

  {path: 'home', component: HomeComponent },
  {path: 'registers', component: RegisterComponent},
  {path: 'user-management', component: UserManagementComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'classes', pathMatch: 'full'},

];
@NgModule({
  declarations: [
    AppComponent,
    ModalConfirmComponent,
    ModalItemSelectorComponent,
    ModalSimpleInputComponent,
    AdminPanelComponent,
    UserManagementComponent,
    HomeComponent,
    RegisterComponent,
    RolesModalComponent,
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
    TabsModule.forRoot(),
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
    }),
    FormsModule

  ],
  entryComponents: [
    ModalConfirmComponent,
    ModalItemSelectorComponent,
    ModalSimpleInputComponent,
    RolesModalComponent ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'FR'},
      AuthService,
      AuthGuard,
      UserService,
      AdminService,
      AlertifyService
   ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
  constructor(
  overlayContainer: OverlayContainer) { overlayContainer.getContainerElement().classList.add('Planning'); } }
