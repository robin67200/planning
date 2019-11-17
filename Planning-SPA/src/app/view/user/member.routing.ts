import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MemberListComponent } from './member-list/member-list.component';



export const routes: Routes = [
{
path: '',
redirectTo: 'list',
},
{path: 'list', component: MemberListComponent },

];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class MembersRoutingModule {}
