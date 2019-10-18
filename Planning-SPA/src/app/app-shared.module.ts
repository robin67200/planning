import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalConfirmComponent } from './components/modals/confirm-modal';
import { AppSlidePanelComponent } from './components/app-slide-panel/app-slide-panel.component';
import { RouterModule } from '@angular/router';
import { NgModule, Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

const APP_COMPONENTS = [ AppSlidePanelComponent, ];

const APP_MODULES = [
  CommonModule,
  FormsModule,
  MatInputModule,
];

@NgModule({
  declarations: [ APP_COMPONENTS ],
  imports: [ APP_MODULES ],
  providers: [
  ],
  entryComponents: [],
  exports: [ APP_MODULES, APP_COMPONENTS ]
})
export class AppSharedModule {}
