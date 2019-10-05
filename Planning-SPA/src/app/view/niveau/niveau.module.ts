import { NiveauxRoutingModule } from './niveau.routing';
import { NiveauDetailComponent } from './niveau-detail/niveau-detail.component';
import { NiveauListComponent } from './niveau-list/niveau-list.component';
import { NiveauService } from './services/niveau.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            NiveauxRoutingModule,
            FormsModule,
            AppSharedModule,
            ModalModule.forRoot()
            ],
  declarations: [
    NiveauListComponent,
    NiveauDetailComponent
  ],
  providers: [NiveauService],
  entryComponents: [],
  exports: []
})
export class NiveauModule {}
