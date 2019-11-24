import { IndisponibiliteService3 } from './../../services/indisponibilite.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Indisponibilite } from '../../models/indisponibilite';

@Component({
  selector: 'app-indisp-form',
  templateUrl: './indisp-form.component.html',
  styleUrls: ['./indisp-form.component.css']
})
export class IndispFormComponent implements OnInit {

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
    private service: IndisponibiliteService3<Indisponibilite, number>,
  ) {
    this.form = this.fb.group({
      id: new FormControl(0, [Validators.required]),
      date: new FormControl(new Date(), [Validators.required]),
      professeurId: new FormControl(0, [Validators.required]),
    });
  }

  get date() {return this.form.get('date'); }
  get niveauId() {return this.form.get('profId'); }

  ngOnInit() {
  }

  save() {
    if (this.form.valid) {
      this.hasError = false;
      const indispo = new Indisponibilite(new Date(), 0);
      indispo.id = this.form.value.id;
      indispo.date = this.form.value.date;
      indispo.professeurId = this.form.value.professeurId;

      this.onCreating2.emit(indispo);

      this.form.reset();
      this.form.controls.id.setValue(0);


    } else {
      this.hasError = true;
      const controls: AbstractControl[] = [];

      Object.keys(this.form.controls).forEach(key => {
        controls.push(this.form.get(key));
      });

      const invalids: AbstractControl[] = controls.filter(a => a.invalid);
      switch (invalids[0]) {
        case this.form.controls.date:
          this.error = 'La date est obligatoire';
          break;
        case this.form.controls.ProfId:
          this.error = `Le prof est obligatoire`;
          break;
      }
    }
  }

  close() {
    this.form.reset();
    this.onClose.emit(null);
  }

}
