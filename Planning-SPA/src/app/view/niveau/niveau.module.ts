import { NiveauSelectComponent } from './components/niveau-select/niveau-select.component';
import { NiveauxRoutingModule } from './niveau.routing';
import { NiveauListComponent } from './niveau-list/niveau-list.component';
import { NiveauService, NiveauService2 } from './services/niveau.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { NiveauCreateComponent } from './components/niveau-select/niveau-create/niveau-create.component';
import { NiveauEditComponent } from './components/niveau-select/niveau-edit/niveau-edit.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule,
    MatMenuModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            NiveauxRoutingModule,
            FormsModule,
            AppSharedModule,
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
    NiveauListComponent,
    NiveauSelectComponent,
    NiveauCreateComponent,
    NiveauEditComponent
  ],
  providers: [NiveauService, NiveauService2],
  entryComponents: [],
  exports: [NiveauSelectComponent, NiveauCreateComponent, NiveauEditComponent]
})
export class NiveauModule {}
