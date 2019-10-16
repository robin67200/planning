import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
export interface SimpleInputModel {
  title: string;
  label: string;
  message: string;
  defaultValue: string;
}
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'modal-confirm',
  template: `
    <div class="modal-dialog">
      <form [formGroup]="form" novalidate="novalidate" (submit)="confirm()">
        <div class="modal-content">
          <div class="modal-header">
            <h4 style="text-align: center">{{ title || 'Confirmation' }}</h4>
          </div>
          <div class="modal-body">
            <p>
              {{ message }}
            </p>

            <div class="form-group row">
              <label class="col-form-label col-4">{{ label }}</label>
              <div class="col-8">
                <input
                  class="form-control form-control-sm"
                  formControlName="input"
                  type="text"
                  required="required"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              (click)="close()"
            >
              <i class="fi flaticon-error"></i> Annuler
            </button>
            <button type="submit" class="btn btn-success btn-sm">
              <i class="fi flaticon-success"></i> Valider
            </button>
          </div>
        </div>
      </form>
    </div>
  `
})
export class ModalSimpleInputComponent
  extends SimpleModalComponent<SimpleInputModel, string>
  implements SimpleInputModel, OnInit {
  title: string;
  label: string;
  message: string;
  defaultValue: string;
  form: FormGroup;

  input = new FormControl(this.defaultValue);
  constructor(fb: FormBuilder) {
    super();

    this.form = fb.group({
      input: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.form.controls.input.setValue(this.defaultValue);
  }
  confirm() {
    if (this.form.valid) {
      this.result = this.form.value.input;
      this.close();
    }
  }
}

