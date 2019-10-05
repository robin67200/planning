import { CoursService } from './services/cours.service';
import { CoursListComponent } from './cours-list/cours-list.component';
import { CoursDetailComponent } from './cours-detail/cours-detail.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { CoursRoutingModule } from './cours.routing';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            CoursRoutingModule,
            AppSharedModule,
            ModalModule.forRoot()
            ],
  declarations: [
  ],
  providers: [CoursService],
  entryComponents: [],
  exports: []
})
export class CoursModule {}
