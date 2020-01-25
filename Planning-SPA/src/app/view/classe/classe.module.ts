import { CoursService } from './../cours/services/cours.service';
import { ClasseDetailDelCoursComponent } from './classe-detail/classe-detail-del-cours/classe-detail-del-cours.component';
import { ClasseDetailAddCoursComponent } from './classe-detail/classe-detail-add-cours/classe-detail-add-cours.component';
import { ProfAddClasseModalsComponent } from './../prof/prof-detail/prof-add-classe-modals/prof-add-classe-modals.component';
import { ClasseModalsComponent } from './classe-modals/classe-modals.component';
import { ClasseFormEditComponent } from './components/classe-form-edit/classe-form-edit.component';
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
import { MatInputModule, MatIconModule, MatNativeDateModule,
  MatDatepickerModule, MatSelectModule, MatTableModule, MatSortModule,
   MatPaginatorModule, MatMenuModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            ClassesRoutingModule,
            AppSharedModule,
            ModalModule.forRoot(),
            AnneesModule,
            NiveauModule,
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
    ClasseListComponent,
    ClasseDetailComponent,
    ClasseFormComponent,
    ClasseSelectComponent,
    ClasseFormEditComponent,
    ClasseModalsComponent,
    ClasseDetailAddCoursComponent,
    ClasseDetailDelCoursComponent,
  ],
  providers: [ClasseService, ClasseService2, CoursService],
  entryComponents: [
    ClasseModalsComponent,
    ClasseDetailAddCoursComponent,
    ClasseDetailDelCoursComponent],
  exports: [ClasseSelectComponent, ClasseFormComponent, ClasseFormEditComponent]
})
export class ClasseModule {}
