import { NavComponent } from './../nav/nav.component';
import { ROUTES } from './layout.routes';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    ROUTES
  ],
  declarations: [LayoutComponent, NavComponent]
})

export class LayoutModule {
}
