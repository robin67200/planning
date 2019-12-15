import { NiveauSelectComponent } from './components/niveau-select/niveau-select.component';
import { NiveauxRoutingModule } from './niveau.routing';
import { NiveauListComponent } from './niveau-list/niveau-list.component';
import { NiveauService } from './services/niveau.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { NiveauModalsComponent } from './niveau-modals/niveau-modals.component';

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
    NiveauSelectComponent,
    NiveauModalsComponent
  ],
  providers: [NiveauService],
  entryComponents: [NiveauModalsComponent],
  exports: [NiveauSelectComponent]
})
export class NiveauModule {}
