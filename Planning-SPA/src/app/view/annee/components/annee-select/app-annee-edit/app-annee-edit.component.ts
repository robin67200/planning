import { FormGroupDirective, FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Eleve } from 'src/app/view/eleve/models/eleve';
import { EleveService } from 'src/app/view/eleve/services/eleve.service';
import { AnneeService, AnneeService2 } from '../../../services/annee.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Annee } from '../../../models/annee';

@Component({
  selector: 'app-app-annee-edit',
  templateUrl: './app-annee-edit.component.html',
  styleUrls: ['./app-annee-edit.component.css']
})
export class AppAnneeEditComponent implements OnInit {

  @ViewChild(FormGroupDirective, { static: true }) ngForm: { resetForm: () => void; };

  form: FormGroup;
  hasError = false;
  id: number;
  error: string;
  eleves: Eleve[];

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onUpdating = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix

  constructor(
    private fb: FormBuilder,
    private service: AnneeService,
    private service2: AnneeService2,

    route: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      id: new FormControl(''),
      nom: new FormControl('', [Validators.required]),
    });
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
  }

  get nom() {return this.form.get('nom'); }

  ngOnInit() {
    this.service2.objectChanged().subscribe(annees => {
      this.form.patchValue(annees);
    });
  }
  save() {
    if (this.form.valid) {
      this.hasError = false;
      const annee = new Annee('');
      annee.id = this.form.value.id;
      annee.nom = this.form.value.nom;

      this.onUpdating.emit(annee);
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
