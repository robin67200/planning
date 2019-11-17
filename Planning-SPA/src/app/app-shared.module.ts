import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalConfirmComponent } from './components/modals/confirm-modal';
import { AppSlidePanelComponent } from './components/app-slide-panel/app-slide-panel.component';
import { RouterModule } from '@angular/router';
import { NgModule, Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AdminPanelComponent } from './view/admin/admin-panel/admin-panel.component';
import { UserManagementComponent } from './view/admin/user-management/user-management.component';
import { RolesModalComponent } from './view/admin/roles-modal/roles-modal.component';
import { AuthService } from './view/_services/auth.service';
import { AuthGuard } from './view/_guards/auth.guard';
import { AdminService } from './view/_services/admin.service';
import { UserService } from './view/user/_services/user.service';
import { TabsModule } from 'ngx-tabset';

const APP_COMPONENTS = [ AppSlidePanelComponent,
  AdminPanelComponent,
  UserManagementComponent,
  RolesModalComponent, ];

const APP_MODULES = [
  CommonModule,
  FormsModule,
  MatInputModule,
  MatDatepickerModule,
  TabsModule.forRoot(),

];

@NgModule({
  declarations: [ APP_COMPONENTS ],
  imports: [ APP_MODULES ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AdminService
  ],
  entryComponents: [
    RolesModalComponent
  ],
  exports: [ APP_MODULES, APP_COMPONENTS ]
})
export class AppSharedModule {}
