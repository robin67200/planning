import { AnneeListComponent } from './annee-list/annee-list.component';
import { AnneeService } from './services/annee.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { AnneesRoutingModule } from './annee.routing';
import { AnneeSelectComponent } from './components/annee-select/annee-select.component';

@NgModule({
  imports: [AppSharedModule,
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            AnneesRoutingModule,
            ModalModule.forRoot()
            ],
  declarations: [
    AnneeListComponent,
    AnneeSelectComponent
  ],
  providers: [AnneeService],
  entryComponents: [],
  exports: [AnneeSelectComponent]
})
export class AnneesModule {}
