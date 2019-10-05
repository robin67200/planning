import { ClasseDetailComponent } from './classe-detail/classe-detail.component';
import { ClasseListComponent } from './classe-list/classe-list.component';
import { ClasseService } from './services/classe.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { ClassesRoutingModule } from './classe.routing';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            ClassesRoutingModule,
            AppSharedModule,
            ModalModule.forRoot()
            ],
  declarations: [

  ],
  providers: [ClasseService],
  entryComponents: [],
  exports: []
})
export class AnneesModule {}
