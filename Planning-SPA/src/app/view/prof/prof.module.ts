import { ProfCreateComponent } from './prof-create/prof-create.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { ProfDetailComponent } from './prof-detail/prof-detail.component';
import { ProfListComponent } from './prof-list/prof-list.component';
import { ProfService } from './services/prof.service';
import { ProfsRoutingModule } from './prof.routing';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            ProfsRoutingModule,
            AppSharedModule,
            ModalModule.forRoot()
            ],
  declarations: [
    ProfDetailComponent,
    ProfListComponent,
  ],
  providers: [ProfService],
  entryComponents: [],
  exports: []
})
export class ProfsModule {}
