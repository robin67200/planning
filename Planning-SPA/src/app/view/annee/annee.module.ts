import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { AppAnneeCreateComponent } from './components/annee-select/app-annee-create/app-annee-create.component';
import { AnneeListComponent } from './annee-list/annee-list.component';
import { AnneeService, AnneeService2 } from './services/annee.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { AnneesRoutingModule } from './annee.routing';
import { AnneeSelectComponent } from './components/annee-select/annee-select.component';
import { AnneeModalComponent } from './annee-modal/annee-modal.component';
import { AppAnneeEditComponent } from './components/annee-select/app-annee-edit/app-annee-edit.component';
import { MatTableModule, MatPaginatorModule, MatSortModule,
   MatIconModule, MatButtonModule, MatNativeDateModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [AppSharedModule,
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            AnneesRoutingModule,
            ModalModule.forRoot(),
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatIconModule,
            MatMenuModule,
            MatButtonModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatSelectModule,
            ],
  declarations: [
    AnneeListComponent,
    AnneeSelectComponent,
    AnneeModalComponent,
    AppAnneeCreateComponent,
    AppAnneeEditComponent
  ],
  providers: [AnneeService, AnneeService2],
  entryComponents: [AnneeModalComponent],
  exports: [AnneeSelectComponent, AnneeModalComponent,
       AppAnneeCreateComponent, AppAnneeEditComponent]
})
export class AnneesModule {}
