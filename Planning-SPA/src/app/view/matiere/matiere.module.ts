import { MatiereSelectComponent } from './components/matiere-select/matiere-select.component';
import { MatieresRoutingModule } from './matiere.routing';
import { MatiereService, MatiereService2 } from './services/matiere.service';
import { MatiereListComponent } from './matiere-list/matiere-list.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { MatSelectModule, MatTableModule, MatPaginatorModule, MatSortModule,
   MatIconModule, MatMenuModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatiereCreateComponent } from './components/matiere-select/matiere-create/matiere-create.component';
import { MatiereEditComponent } from './components/matiere-select/matiere-edit/matiere-edit.component';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            MatieresRoutingModule,
            MatSelectModule,
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
    MatiereListComponent,
    MatiereSelectComponent,
    MatiereCreateComponent,
    MatiereEditComponent
  ],
  providers: [MatiereService, MatiereService2],
  entryComponents: [],
  exports: [MatiereSelectComponent, MatiereEditComponent, MatiereCreateComponent]
})
export class MatiereModule {}
