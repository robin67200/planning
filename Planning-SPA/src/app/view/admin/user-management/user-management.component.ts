import { DeleteModalsComponent } from './../roles-modal/delete-modals/delete-modals.component';
import { UserService } from './../../member/_services/user.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../_services/alertify.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { RolesModalComponent } from '../roles-modal/roles-modal.component';
import { AdminService } from '../../_services/admin.service';
import { User } from '../../member/_models/user';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { SimpleModalService } from 'ngx-simple-modal';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})

export class UserManagementComponent implements OnInit {
  users: User[];
  bsModalRef: BsModalRef;

  constructor(private adminService: AdminService,
              private alertify: AlertifyService,
              private modalService: BsModalService,
              private userService: UserService,
              private modals: SimpleModalService,
              ) { }

  ngOnInit() {
    this.getUsersWithRoles();
  }

  getUsersWithRoles() {
    this.adminService.getUsersWithRoles().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
      this.alertify.error('erreur');
    });
  }

  editRolesModal(user: User) {
    const initialState = {
      user,
      roles: this.getRolesArray(user)
    };
    this.bsModalRef = this.modalService.show(RolesModalComponent, {initialState});
    this.bsModalRef.content.updateSelectedRoles.subscribe((values: any[]) => {
      const rolesToUpdate = {
        roleNames: [...values.filter((el: { checked: boolean; }) => el.checked === true).map((el: { name: any; }) => el.name)]
      };
      if (rolesToUpdate) {
        this.adminService.updateUsersRoles(user, rolesToUpdate).subscribe(() => {
          user.roles = [...rolesToUpdate.roleNames];
          this.alertify.succes('Role Modifier');
        }, error => {
          this.alertify.error('erreur');
        });
      }

    });
  }

  private getRolesArray(user: User) {
    const roles = [];
    const userRoles = user.roles;
    const avaibleRoles: any[] = [
      {name: 'Admin', value: 'Admin'},
      {name: 'Moderator', value: 'Moderator'},
      {name: 'Member', value: 'Member'},
      {name: 'VIP', value: 'VIP'}
    ];

// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < avaibleRoles.length; i++) {
      let isMatch = false;
// tslint:disable-next-line: prefer-for-of
      for (let j = 0; j < userRoles.length; j++) {
        if (avaibleRoles[i].name === userRoles[j]) {
          isMatch = true;
          avaibleRoles[i].checked = true;
          roles.push(avaibleRoles[i]);
          break;
        }
      }
      if (!isMatch) {
        avaibleRoles[i].checked = false;
        roles.push(avaibleRoles[i]);
      }
    }
    return roles;
  }

  deleteUser(user: User) {
    const initialState = {
      user
    };
    this.bsModalRef = this.modalService.show(DeleteModalsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';

  }
}
