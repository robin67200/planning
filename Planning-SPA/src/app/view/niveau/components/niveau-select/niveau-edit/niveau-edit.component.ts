import { Eleve } from './../../../../eleve/models/eleve';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroupDirective, FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Niveau } from '../../../models/niveau';
import { AnneeService } from 'src/app/view/annee/services/annee.service';
import { NiveauService, NiveauService2 } from '../../../services/niveau.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-niveau-edit',
  templateUrl: './niveau-edit.component.html',
  styleUrls: ['./niveau-edit.component.css']
})
export class NiveauEditComponent implements OnInit {

  @ViewChild(FormGroupDirective, { static: true }) ngForm: { resetForm: () => void; };

  form: FormGroup;
  hasError = false;
  id: number;
  error: string;
  niveaux: Niveau[];

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onUpdating = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix

  constructor(
    private fb: FormBuilder,
    private service: NiveauService,
    private service2: NiveauService2,

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
      const niveau = new Niveau('');
      niveau.id = this.form.value.id;
      niveau.nom = this.form.value.nom;

      this.onUpdating.emit(niveau);
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
