import { AppSharedModule } from 'src/app/app-shared.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SimpleModalService, SimpleModalModule } from 'ngx-simple-modal';
import { UserService } from './_services/user.service';
import { MemberListComponent } from './member-list/member-list.component';
import { MembersRoutingModule } from './member.routing';
import { TimeAgoPipe } from 'time-ago-pipe';



@NgModule({
  imports: [CommonModule,
            AppSharedModule,
            ReactiveFormsModule,
            FormsModule,
            MembersRoutingModule,
           ],
  declarations: [
    MemberListComponent, TimeAgoPipe
  ],
  providers: [UserService]
})
export class MemberModule {}
