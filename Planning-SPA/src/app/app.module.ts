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
import { BsDropdownModule, BsDatepickerModule, ModalModule, TabsModule } from 'ngx-bootstrap';
import { SimpleModalModule, SimpleModalOptions, defaultSimpleModalOptions } from 'ngx-simple-modal';
import { ModalItemSelectorComponent } from './components/modals/item-selector-modal';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NavModule } from './view/nav/nav.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MAT_DATE_LOCALE } from '@angular/material';
import { HomeComponent } from './view/home/home.component';
import { NavComponent } from './view/nav/nav.component';
import { RegisterComponent } from './view/register/register.component';
import { UserService } from './view/member/_services/user.service';
import { AdminService } from './view/_services/admin.service';
import { AlertifyService } from './view/_services/alertify.service';
import { UserManagementComponent } from './view/admin/user-management/user-management.component';
import { AdminPanelComponent } from './view/admin/admin-panel/admin-panel.component';
import { JwtModule } from '@auth0/angular-jwt';
import { DeleteModalsComponent } from './view/admin/roles-modal/delete-modals/delete-modals.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

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
    DeleteModalsComponent,
  ],
  imports: [
    AppSharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NavModule,
    SimpleModalModule.forRoot({container: 'modal-container'}, {...defaultSimpleModalOptions, ...{
      closeOnEscape: true,
      closeOnClickOutside: true,
      bodyClass: 'modal-open',
      wrapperDefaultClasses: 'modal fade',
      wrapperClass: 'show',
      animationDuration: 300,
    }}),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    MatSliderModule,
    MatSidenavModule,
    AngularFontAwesomeModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    })

  ],
  entryComponents: [
    ModalConfirmComponent,
    ModalItemSelectorComponent,
    ModalSimpleInputComponent,
    RolesModalComponent,
    DeleteModalsComponent
   ],
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
