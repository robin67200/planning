import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalConfirmComponent } from './components/modals/confirm-modal';
import { AppSlidePanelComponent } from './components/app-slide-panel/app-slide-panel.component';
import { RouterModule } from '@angular/router';
import { NgModule, Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SlideCreateComponent } from './components/slide-create/slide-create.component';
import { HasRoleDirective } from './view/_directives/hasRole.directive';
import { ChartsModule } from 'ng2-charts';

const APP_COMPONENTS = [
  AppSlidePanelComponent,
  SlideCreateComponent,
   ];

const APP_MODULES = [
  CommonModule,
  ChartsModule,
  FormsModule,
  MatInputModule,
  MatDatepickerModule,

];

@NgModule({
  declarations: [HasRoleDirective, APP_COMPONENTS ],
  imports: [ APP_MODULES ],
  providers: [
  ],
  entryComponents: [],
  exports: [ APP_MODULES, HasRoleDirective, AppSlidePanelComponent,
    SlideCreateComponent ]
})
export class AppSharedModule {}
