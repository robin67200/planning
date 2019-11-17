import { ElevesRoutingModule } from './eleve.routing';
import { EleveService, EleveService2 } from './services/eleve.service';
import { EleveDetailComponent } from './eleve-detail/eleve-detail.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { EleveListComponent } from './eleve-list/eleve-list.component';
import { EleveFormComponent } from './components/eleve-form/eleve-form.component';
import { ClasseModule } from '../classe/classe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            ElevesRoutingModule,
            AppSharedModule,
            ModalModule.forRoot(),
            BsDatepickerModule.forRoot(),
            ClasseModule,
            Ng2SearchPipeModule
            ],
  declarations: [
    EleveDetailComponent,
    EleveListComponent,
    EleveFormComponent
  ],
  providers: [EleveService, EleveService2],
  entryComponents: [],
  exports: [EleveFormComponent]
})
export class ElevesModule {}
