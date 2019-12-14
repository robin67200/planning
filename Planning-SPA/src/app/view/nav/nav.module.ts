import { HasRoleDirective } from './../_directives/hasRole.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AppSharedModule } from 'src/app/app-shared.module';

@NgModule({
  declarations: [NavComponent],
  imports:
      [CommonModule,
      ReactiveFormsModule,
      AppSharedModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      RouterModule,
      MatListModule,
      FormsModule,
      MatTooltipModule,

    ],
  exports: [NavComponent],
  entryComponents: [],
})

export class NavModule { }
