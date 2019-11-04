import { MatiereModule } from './../matiere/matiere.module';
import { AnneesModule } from './../annee/annee.module';
import { ProfsModule } from './../prof/prof.module';
import { MatInputModule } from '@angular/material/input';
import { CoursFormComponent } from './components/cours-form/cours-form.component';
import { CoursService, CoursService2 } from './services/cours.service';
import { CoursListComponent } from './cours-list/cours-list.component';
import { CoursDetailComponent } from './cours-detail/cours-detail.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { CoursRoutingModule } from './cours.routing';
import { NgModule } from '@angular/core';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import {MatDatepickerModule, MatDatepickerToggle, MatDatepickerToggleIcon} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';


@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            CoursRoutingModule,
            MatInputModule,
            AppSharedModule,
            ModalModule.forRoot(),
            BsDatepickerModule.forRoot(),
            AmazingTimePickerModule,
            MatDatepickerModule,
            MatNativeDateModule,
            ProfsModule,
            AnneesModule,
            MatiereModule
            ],
  declarations: [
    CoursListComponent,
    CoursDetailComponent,
    CoursFormComponent,
    ],
  providers: [CoursService, CoursService2],
  entryComponents: [],
  exports: [CoursFormComponent]
})
export class CourssModule {}
