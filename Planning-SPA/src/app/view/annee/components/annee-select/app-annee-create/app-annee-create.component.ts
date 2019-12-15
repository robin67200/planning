import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Annee } from '../../../models/annee';
import { FormGroup, FormGroupDirective, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-annee-create',
  templateUrl: './app-annee-create.component.html',
  styleUrls: ['./app-annee-create.component.css']
})
export class AppAnneeCreateComponent implements OnInit {

  @ViewChild(FormGroupDirective, { static: true }) ngForm: { resetForm: () => void; };

  form: FormGroup;
  hasError = false;
  id: number;
  error: string;
  annees: Annee[] = [];

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onCreating = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix

  constructor(
    private fb: FormBuilder,
    route: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      id: new FormControl(''),
      nom: new FormControl('', [Validators.required]),
    });

  }

  get nom() {return this.form.get('nom'); }

  ngOnInit() {}

  save() {
    if (this.form.valid) {
      this.hasError = false;
      const annee = new Annee('');
      annee.nom = this.form.value.nom;

      this.onCreating.emit(annee);
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
