import { AlertifyService } from '../../../_services/alertify.service';
import { IndisponibiliteService3 } from './../../services/indisponibilite.service';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, FormGroupDirective } from '@angular/forms';
import { Indisponibilite } from '../../models/indisponibilite';

@Component({
  selector: 'app-indisp-form',
  templateUrl: './indisp-form.component.html',
  styleUrls: ['./indisp-form.component.css']
})
export class IndispFormComponent implements OnInit {

  @ViewChild(FormGroupDirective, { static: true }) ngForm: { resetForm: () => void; };

  form: FormGroup;
  id: number;
  hasError = false;
  error: string;
  indispos: Indisponibilite[] = [];

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onCreating2 = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private alertify: AlertifyService,
    private service: IndisponibiliteService3<Indisponibilite, number>,
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
  }

  save() {
    if (this.form.valid) {
      this.hasError = false;
      const indispo = new Indisponibilite(new Date(), new Date(), 0);
      indispo.start = this.form.value.start;
      indispo.end = this.form.value.end;
      indispo.professeurId = this.form.value.professeurId;

     // if (indispo.start > indispo.end) {
      //  this.alertify.error('La date de début est supérieure à la date de fin');
     // } else if (indispo.end === indispo.start) {
     //   this.alertify.error('Les dates ne peuvent être égales');
     // } else {
      this.onCreating2.emit(indispo);
      this.ngForm.resetForm();

      this.form.reset();
      this.form.controls.id.setValue(0);
     // }
    }
  }
  close() {
    this.ngForm.resetForm();
    this.form.reset();
    this.onClose.emit(null);
  }
}



