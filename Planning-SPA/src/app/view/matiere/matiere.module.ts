import { MatiereSelectComponent } from './components/matiere-select/matiere-select.component';
import { MatieresRoutingModule } from './matiere.routing';
import { MatiereService } from './services/matiere.service';
import { MatiereListComponent } from './matiere-list/matiere-list.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { MatSelectModule } from '@angular/material';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            MatieresRoutingModule,
            MatSelectModule,
            AppSharedModule,
            ModalModule.forRoot()
            ],
  declarations: [
    MatiereListComponent,
    MatiereSelectComponent,
  ],
  providers: [MatiereService],
  entryComponents: [],
  exports: [MatiereSelectComponent]
})
export class MatiereModule {}
