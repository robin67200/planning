import { ProfStatsComponent } from './cours-detail-prof-matiere/prof-stats/prof-stats.component';
import { CoursDetailProfMatiereComponent } from './cours-detail-prof-matiere/cours-detail-prof-matiere.component';
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
    {path: 'stats', component: CoursDetailProfMatiereComponent},
    {path: 'statsdetail/:id', component: ProfStatsComponent},
  ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class CoursRoutingModule {}
