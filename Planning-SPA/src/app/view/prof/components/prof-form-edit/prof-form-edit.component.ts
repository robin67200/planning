import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Prof } from '../../models/prof';
import { ProfService, ProfService2 } from '../../services/prof.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-prof-form-edit',
  templateUrl: './prof-form-edit.component.html',
  styleUrls: ['./prof-form-edit.component.css']
})
export class ProfFormEditComponent implements OnInit {

  @ViewChild(FormGroupDirective, { static: true }) ngForm: { resetForm: () => void; };

  form: FormGroup;
  id: number;
  hasError = false;
  isUpdating = false;
  error: string;
  profs: Prof[] = [];

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onUpdating = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private service: ProfService2,
    route: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      id: new FormControl(0, [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required,
      Validators.email]),
      telephone: new FormControl('', [Validators.required]),
      note: new FormControl('')
    });
  }

  get nom() {return this.form.get('nom'); }
  get prenom() {return this.form.get('prenom'); }
  get adresse() {return this.form.get('adresse'); }
  get mail() {return this.form.get('mail'); }
  get telephone() {return this.form.get('telephone'); }

  ngOnInit() {
    this.service.objectChanged().subscribe(profs => {
      this.form.patchValue(profs);
    });
  }

  save() {
    if (this.form.valid) {
      this.hasError = false;
      const prof = new Prof('', '', '', '', 0, 0);
      prof.id = this.form.value.id;
      prof.nom = this.form.value.nom;
      prof.prenom = this.form.value.prenom;
      prof.adresse = this.form.value.adresse;
      prof.mail = this.form.value.mail;
      prof.telephone = this.form.value.telephone;
      prof.note = this.form.value.note;

      this.onUpdating.emit(prof);
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
