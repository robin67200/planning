import { ClasseFormComponent } from './components/classe-form/classe-form.component';
import { ClasseDetailComponent } from './classe-detail/classe-detail.component';
import { ClasseListComponent } from './classe-list/classe-list.component';
import { ClasseService, ClasseService2 } from './services/classe.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { ClassesRoutingModule } from './classe.routing';
import { ClasseSelectComponent } from './components/classe-select/classe-select.component';
import { AnneesModule } from '../annee/annee.module';
import { NiveauModule } from '../niveau/niveau.module';
import { MatInputModule, MatIconModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            ClassesRoutingModule,
            AppSharedModule,
            ModalModule.forRoot(),
            AnneesModule,
            NiveauModule,
            MatInputModule,
            MatIconModule,
            MatDatepickerModule,
            MatNativeDateModule,
            ],
  declarations: [
    ClasseListComponent,
    ClasseDetailComponent,
    ClasseFormComponent,
    ClasseSelectComponent
  ],
  providers: [ClasseService, ClasseService2],
  entryComponents: [],
  exports: [ClasseSelectComponent, ClasseFormComponent]
})
export class ClasseModule {}
