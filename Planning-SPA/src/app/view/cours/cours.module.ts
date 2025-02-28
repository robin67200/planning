import { ProfStatsComponent } from './cours-detail-prof-matiere/prof-stats/prof-stats.component';
import { CoursDetailProfMatiereComponent } from './cours-detail-prof-matiere/cours-detail-prof-matiere.component';
import { CoursModalsComponent } from './cours-modals/cours-modals.component';
import { CoursListComponent } from './cours-list/cours-list.component';
import { CoursFormEditComponent } from './components/cours-form-edit/cours-form-edit.component';
import { MatiereModule } from './../matiere/matiere.module';
import { ProfModule } from './../prof/prof.module';
import { MatInputModule } from '@angular/material/input';
import { CoursFormComponent } from './components/cours-form/cours-form.component';
import { CoursService, CoursService2 } from './services/cours.service';
import { CoursDetailComponent } from './components/cours-detail/cours-detail.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { CoursRoutingModule } from './cours.routing';
import { NgModule } from '@angular/core';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import {MatDatepickerModule, MatDatepickerToggle, MatDatepickerToggleIcon} from '@angular/material/datepicker';
import { MatNativeDateModule, MatSelectModule } from '@angular/material';
import { CalendarComponent } from './calendar/calendar.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { ClasseModule } from '../classe/classe.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { IndisponibiliteModule } from '../indisponibilite/indisponibilite.module';


@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            CoursRoutingModule,
            MatInputModule,
            MatIconModule,
            AppSharedModule,
            ModalModule.forRoot(),
            BsDatepickerModule.forRoot(),
            RouterModule,
            ColorPickerModule,
            AmazingTimePickerModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatSelectModule,
            ProfModule,
            ClasseModule,
            MatiereModule,
            IndisponibiliteModule,
            FormsModule,
            NgbModalModule,
            FlatpickrModule.forRoot(),
            CalendarModule.forRoot({
              provide: DateAdapter,
              useFactory: adapterFactory
            })
            ],
  declarations: [
    CoursDetailComponent,
    CoursListComponent,
    CoursFormComponent,
    CalendarComponent,
    CoursFormEditComponent,
    CoursDetailProfMatiereComponent,
    ProfStatsComponent,
    CoursModalsComponent
    ],
  providers: [CoursService, CoursService2],
  entryComponents: [CoursModalsComponent],
  exports: [CoursFormComponent, CalendarComponent, CoursFormEditComponent]
})
export class CoursModule {}
