import { MatiereService } from 'src/app/view/matiere/services/matiere.service';
import { ProfDelMatiereModalsComponent } from './prof-detail/prof-del-matiere-modals/prof-del-matiere-modals.component';
import { ProfAddMatiereModalsComponent } from './prof-detail/prof-add-matiere-modals/prof-add-matiere-modals.component';
import { ProfDelClasseModalsComponent } from './prof-detail/prof-del-classe-modals/prof-del-classe-modals.component';
import { ProfAddClasseModalsComponent } from './prof-detail/prof-add-classe-modals/prof-add-classe-modals.component';
import { ProfModalsComponent } from './prof-modals/prof-modals.component';
import { ProfFormEditComponent } from './components/prof-form-edit/prof-form-edit.component';
import { MatIconModule } from '@angular/material/icon';
import { ProfFormComponent } from './components/prof-form/prof-form.component';
import { ProfSelectComponent } from './components/prof-select/prof-select.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

import { AppSharedModule } from '../../app-shared.module';
import { ProfDetailComponent } from './prof-detail/prof-detail.component';
import { ProfListComponent } from './prof-list/prof-list.component';
import { ProfService, ProfService2 } from './services/prof.service';
import { ProfsRoutingModule } from './prof.routing';
import { MatNativeDateModule, MatDatepickerModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalModule } from 'ngx-bootstrap';
import { ClasseService } from '../classe/services/classe.service';


@NgModule({
  imports: [CommonModule,
            ModalModule.forRoot(),
            ReactiveFormsModule,
            FormsModule,
            ProfsRoutingModule,
            AppSharedModule,
            MatIconModule,
            MatInputModule,
            Ng2SearchPipeModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatSelectModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatIconModule,
            MatMenuModule,
            MatButtonModule,

            ],
  declarations: [
    ProfDetailComponent,
    ProfListComponent,
    ProfSelectComponent,
    ProfFormComponent,
    ProfFormEditComponent,
    ProfModalsComponent,
    ProfAddClasseModalsComponent,
    ProfDelClasseModalsComponent,
    ProfAddMatiereModalsComponent,
    ProfDelMatiereModalsComponent

  ],
  providers: [ProfService, ProfService2, MatiereService, ClasseService],

  entryComponents: [
    ProfModalsComponent,
    ProfAddClasseModalsComponent,
    ProfDelClasseModalsComponent,
    ProfAddMatiereModalsComponent,
    ProfDelMatiereModalsComponent

  ],
  exports: [ProfSelectComponent, ProfFormComponent, ProfFormEditComponent]
})
export class ProfsModule {}
