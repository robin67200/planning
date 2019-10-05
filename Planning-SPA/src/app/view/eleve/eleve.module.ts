import { ElevesRoutingModule } from './eleve.routing';
import { EleveService } from './services/eleve.service';
import { EleveDetailComponent } from './eleve-detail/eleve-detail.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { EleveListComponent } from './eleve-list/eleve-list.component';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            ElevesRoutingModule,
            AppSharedModule,
            ModalModule.forRoot()
            ],
  declarations: [
    EleveDetailComponent,
    EleveListComponent,
  ],
  providers: [EleveService],
  entryComponents: [],
  exports: []
})
export class ElevesModule {}
