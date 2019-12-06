import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppSharedModule } from 'src/app/app-shared.module';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { IndisponibiliteListComponent } from './indisponibilite-list/indisponibilite-list.component';
import { IndisponibiliteFormComponent } from './components/indisponibilite-form/indisponibilite-form.component';
import { IndisponibiliteService, IndisponibiliteService3 } from './services/indisponibilite.service';
import { IndisponibilitesRoutingModule } from './indisponibilite.routing';
import { ProfsModule } from '../prof/prof.module';
import { ProfSelectComponent } from '../prof/components/prof-select/prof-select.component';
import { IndispFormComponent } from './components/indisp-form/indisp-form.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { MatInputModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            IndisponibilitesRoutingModule,
            AppSharedModule,
            ModalModule.forRoot(),
            BsDatepickerModule.forRoot(),
            FlatpickrModule.forRoot(),
            ProfsModule,
            NgbModule,
            NgbDatepickerModule,
            MatInputModule,
            MatIconModule,
            ],
  declarations: [
    IndisponibiliteListComponent,
    IndisponibiliteFormComponent,
    IndispFormComponent,
  ],
  providers: [IndisponibiliteService, IndisponibiliteService3],
  entryComponents: [],
  exports: [IndisponibiliteFormComponent, IndispFormComponent],
})
export class IndisponibiliteModule {}
