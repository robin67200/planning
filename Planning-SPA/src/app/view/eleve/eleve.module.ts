import { EleveFormEditComponent } from './components/eleve-form-edit/eleve-form-edit.component';
import { ElevesRoutingModule } from './eleve.routing';
import { EleveService, EleveService2 } from './services/eleve.service';
import { EleveDetailComponent } from './eleve-detail/eleve-detail.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { EleveListComponent } from './eleve-list/eleve-list.component';
import { EleveFormComponent } from './components/eleve-form/eleve-form.component';
import { ClasseModule } from '../classe/classe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule, MatIconModule, MatButtonModule, MatDatepickerModule,
  MatNativeDateModule, MatSelectModule, MatInputModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            ElevesRoutingModule,
            AppSharedModule,
            ModalModule.forRoot(),
            BsDatepickerModule.forRoot(),
            ClasseModule,
            Ng2SearchPipeModule,
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
    EleveDetailComponent,
    EleveListComponent,
    EleveFormComponent,
    EleveFormEditComponent,
  ],
  providers: [EleveService, EleveService2],
  entryComponents: [],
  exports: [EleveFormComponent, EleveFormEditComponent]
})
export class ElevesModule {}
