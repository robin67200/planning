import { User } from './../../../member/_models/user';
import { UserService } from './../../../member/_services/user.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/view/_services/alertify.service';
import { BsModalRef } from 'ngx-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-modals',
  templateUrl: './delete-modals.component.html',
  styleUrls: ['./delete-modals.component.css']
})
export class DeleteModalsComponent implements OnInit {

  closeBtnName: string;
  users: User;
  user: any;

  constructor(
    public bsModalRef: BsModalRef,
    private service: UserService,
    private alertify: AlertifyService,
    private router: Router,
    ) {}
  ngOnInit() {
  }

  deleteUser(user: User) {
    this.service.deleteUserfById(user.id).subscribe(res => {
      this.router.navigateByUrl('/UserManagementComponent', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/admin']);
    });
      this.alertify.succes('Supprimé');
    });
  }

}
