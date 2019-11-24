import { MatIconModule } from '@angular/material/icon';
import { ProfFormComponent } from './components/prof-form/prof-form.component';
import { ProfSelectComponent } from './components/prof-select/prof-select.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { ProfDetailComponent } from './prof-detail/prof-detail.component';
import { ProfListComponent } from './prof-list/prof-list.component';
import { ProfService, ProfService2 } from './services/prof.service';
import { ProfsRoutingModule } from './prof.routing';
import { MatNativeDateModule, MatDatepickerModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            ProfsRoutingModule,
            AppSharedModule,
            ModalModule.forRoot(),
            MatIconModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatSelectModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatIconModule,
            MatMenuModule,
            MatButtonModule

            ],
  declarations: [
    ProfDetailComponent,
    ProfListComponent,
    ProfSelectComponent,
    ProfFormComponent
  ],
  providers: [ProfService, ProfService2],
  entryComponents: [],
  exports: [ProfSelectComponent, ProfFormComponent]
})
export class ProfsModule {}
