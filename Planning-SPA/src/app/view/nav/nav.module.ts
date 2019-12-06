import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [NavComponent],
  imports:
      [CommonModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      RouterModule,
      MatListModule,
      FormsModule,
      ReactiveFormsModule,
      MatTooltipModule,

    ],
  exports: [NavComponent]
})

export class NavModule { }
