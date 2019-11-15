import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoursDetailComponent } from './cours-detail/cours-detail.component';
import { CalendarComponent } from './calendar/calendar.component';

export const routes: Routes = [
  {
  path: '',
  redirectTo: 'calendar',
  },
    // {path: 'create', component: },
    {path: 'detail/:id', component: CoursDetailComponent},
   // {path: 'edit/:id', component: },
    // {path: 'detail/:id/delete/:id', component: },
    {path: 'calendar', component: CalendarComponent},

  ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class CoursRoutingModule {}
