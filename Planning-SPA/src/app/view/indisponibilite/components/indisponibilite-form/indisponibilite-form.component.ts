import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, FormGroupDirective } from '@angular/forms';
import { Indisponibilite } from '../../models/indisponibilite';
import { IndisponibiliteService, IndisponibiliteService3 } from '../../services/indisponibilite.service';
import { isThursday } from 'date-fns';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-indisponibilite-form',
  templateUrl: './indisponibilite-form.component.html',
  styleUrls: ['./indisponibilite-form.component.css']
})
export class IndisponibiliteFormComponent implements OnInit {

  @ViewChild(FormGroupDirective, { static: true }) ngForm: { resetForm: () => void; };

  form: FormGroup;
  id: number;
  hasError = false;
  error: string;
  indispos: Indisponibilite[] = [];

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onUpdating = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private service: IndisponibiliteService3<Indisponibilite, number>,
    private indispService: IndisponibiliteService
  ) {
    this.form = this.fb.group({
      id: new FormControl(''),
      start: new FormControl(new Date(), [Validators.required]),
      end: new FormControl(new Date(), [Validators.required]),
      professeurId: new FormControl(0, [Validators.required]),
    });
   }

   get start() {return this.form.get('start'); }
   get end() {return this.form.get('end'); }
   get profId() {return this.form.get('profId'); }

  ngOnInit() {
    this.service.objectChanged().subscribe(indispos => {
      this.form.patchValue(indispos);
    });
  }

  save() {
    if (this.form.valid) {
      this.hasError = false;
      const indispo = new Indisponibilite(new Date(), new Date(), 0);
      indispo.id = this.form.value.id;
      indispo.start = this.form.value.start;
      indispo.end = this.form.value.end;
      indispo.professeurId = this.form.value.professeurId;

      this.onUpdating.emit(indispo);
      this.ngForm.resetForm();

      this.form.reset();
      this.form.controls.id.setValue(0);

    }

  }

  close() {
    this.ngForm.resetForm();
    this.form.reset();
    this.onClose.emit(null);
  }

}
