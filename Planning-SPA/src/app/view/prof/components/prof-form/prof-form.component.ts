import { Prof } from './../../models/prof';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, FormGroupDirective } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ProfService2 } from '../../services/prof.service';

@Component({
  selector: 'app-prof-form',
  templateUrl: './prof-form.component.html',
  styleUrls: ['./prof-form.component.css']
})
export class ProfFormComponent implements OnInit {

  @ViewChild(FormGroupDirective, { static: true }) ngForm: { resetForm: () => void; };

  form: FormGroup;
  id: number;
  hasError = false;
  error: string;
  profs: Prof[] = [];

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onCreating = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix

  constructor(
    private fb: FormBuilder,
    private service: ProfService2,
    route: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      id: new FormControl(''),
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required,
      Validators.email]),
      telephone: new FormControl('', [Validators.required]),
    });
  }

  get nom() {return this.form.get('nom'); }
  get prenom() {return this.form.get('prenom'); }
  get adresse() {return this.form.get('adresse'); }
  get mail() {return this.form.get('mail'); }
  get telephone() {return this.form.get('telephone'); }

  ngOnInit() {}

  save() {
    if (this.form.valid) {
      this.hasError = false;
      const prof = new Prof('', '', '', '', 0);
      prof.nom = this.form.value.nom;
      prof.prenom = this.form.value.prenom;
      prof.adresse = this.form.value.adresse;
      prof.mail = this.form.value.mail;
      prof.telephone = this.form.value.telephone;

      this.onCreating.emit(prof);

      this.ngForm.resetForm();
      this.form.reset();
      this.form.controls.id.setValue(0);

    } else {
      this.hasError = true;
      const controls: AbstractControl[] = [];

      Object.keys(this.form.controls).forEach(key => {
        controls.push(this.form.get(key));
      });

  }
}

  close() {
    this.ngForm.resetForm();
    this.form.reset();
    this.onClose.emit(null);
  }

}
