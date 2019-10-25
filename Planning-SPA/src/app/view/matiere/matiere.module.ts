import { MatiereSelectComponent } from './components/matiere-select/matiere-select.component';
import { MatieresRoutingModule } from './matiere.routing';
import { MatiereService } from './services/matiere.service';
import { MatiereListComponent } from './matiere-list/matiere-list.component';
import { MatiereDetailComponent } from './matiere-detail/matiere-detail.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../app-shared.module';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            MatieresRoutingModule,
            AppSharedModule,
            ModalModule.forRoot()
            ],
  declarations: [
    MatiereDetailComponent,
    MatiereListComponent,
    MatiereSelectComponent,
  ],
  providers: [MatiereService],
  entryComponents: [],
  exports: [MatiereSelectComponent]
})
export class MatiereModule {}
