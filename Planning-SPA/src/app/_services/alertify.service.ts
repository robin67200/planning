import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  authService: any;

constructor() { }

  cofirm(message: string, okCallback: () => any) {
// tslint:disable-next-line: only-arrow-functions
    alertify.confirm(message, function(e: any) {
      if (e) {
        okCallback();
      } else {}
    });
  }

  succes(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }
}
