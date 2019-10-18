import { NavComponent } from './../nav/nav.component';
import { ROUTES } from './layout.routing';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    ROUTES
  ],
  declarations: [LayoutComponent, NavComponent]
})

export class LayoutModule {
}
