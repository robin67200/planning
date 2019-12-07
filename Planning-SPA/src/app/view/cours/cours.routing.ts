import { CoursListComponent } from './cours-list/cours-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoursDetailComponent } from './components/cours-detail/cours-detail.component';
import { CalendarComponent } from './calendar/calendar.component';

export const routes: Routes = [
  {
  path: '',
  redirectTo: 'calendar',
  },
    {path: 'calendar', component: CalendarComponent},
    {path: 'list', component: CoursListComponent},
    {path: 'detail/:id', component: CoursDetailComponent},
  ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class CoursRoutingModule {}
