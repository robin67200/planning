import { Component } from '@angular/core';
import { SimpleModalComponent} from 'ngx-simple-modal';

export interface ConfirmModel {
  title: string;
  message: string;
}
@Component({
// tslint:disable-next-line: component-selector
  selector: 'modal-confirm',
  template: `
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 style="text-align: center">{{ title || 'Confirmation' }}</h4>
      </div>
      <div class="modal-body">
        <p [innerHtml]="message || 'Etes-vous sur ?'"></p>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="fi flaticon-error btn btn-outline-primary btn-sm"
          (click)="close()"
        >
          Annuler
        </button>
        <button
          type="button"
          class="fi flaticon-garbage-2 btn btn-danger btn-sm"
          (click)="confirm()"
        >
          Supprimer
        </button>
      </div>
    </div>
    </div>
  `
})
export class ModalConfirmComponent
  extends SimpleModalComponent<ConfirmModel, boolean>
  implements ConfirmModel {
  title: string;
  message: string;
  constructor() {
    super();
  }
  confirm() {
    this.result = true;
    this.close();
  }
}
