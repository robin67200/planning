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
import { CalendarComponent } from './calendar/calendar.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            CoursRoutingModule,
            MatInputModule,
            AppSharedModule,
            ModalModule.forRoot(),
            BsDatepickerModule.forRoot(),
            RouterModule,
            AmazingTimePickerModule,
            MatDatepickerModule,
            MatNativeDateModule,
            ProfsModule,
            AnneesModule,
            MatiereModule,
            FormsModule,
            NgbModalModule,
            FlatpickrModule.forRoot(),
            CalendarModule.forRoot({
              provide: DateAdapter,
              useFactory: adapterFactory
            })
            ],
  declarations: [
    CoursListComponent,
    CoursDetailComponent,
    CoursFormComponent,
    CalendarComponent
    ],
  providers: [CoursService, CoursService2],
  entryComponents: [],
  exports: [CoursFormComponent, CalendarComponent]
})
export class CourssModule {}
