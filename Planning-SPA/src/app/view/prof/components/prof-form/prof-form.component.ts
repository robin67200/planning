import { Prof } from './../../models/prof';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ProfService2 } from '../../services/prof.service';

@Component({
  selector: 'app-prof-form',
  templateUrl: './prof-form.component.html',
  styleUrls: ['./prof-form.component.css']
})
export class ProfFormComponent implements OnInit {

  form: FormGroup;
  id: number;
  hasError = false;
  isUpdating = false;
  error: string;
  profs: Prof[] = [];

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onCreating = new EventEmitter<any>();
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
      this.isUpdating = true;
    });
  }

  save() {
    if (this.form.valid) {
      this.hasError = false;
      const prof = new Prof('', '', '', '', 0);
      prof.id = this.form.value.id;
      prof.nom = this.form.value.nom;
      prof.prenom = this.form.value.prenom;
      prof.adresse = this.form.value.adresse;
      prof.mail = this.form.value.mail;
      prof.telephone = this.form.value.telephone;

      if (this.isUpdating) {
        this.onUpdating.emit(prof);
      } else {
        this.onCreating.emit(prof);
      }

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
        case this.form.controls.nom:
          this.error = 'Le nom est obligatoire';
          break;
        case this.form.controls.prenom:
          this.error = `Le prenom est obligatoire`;
          break;
        case this.form.controls.adresse:
          this.error = `L'adresse est obligatoire`;
          break;
        case this.form.controls.mail:
          this.error = `L'adresse mail est obligatoire et doit être valide`;
          break;
        case this.form.controls.telephone:
          this.error = `Le numéro de telephone est obligatoire`;
          break;
      }
    }
  }

  close() {
    this.form.reset();
    this.onClose.emit(null);
  }

}
