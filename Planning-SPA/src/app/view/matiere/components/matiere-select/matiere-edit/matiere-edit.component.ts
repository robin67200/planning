import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, FormGroupDirective } from '@angular/forms';
import { Matiere } from '../../../models/matiere';
import { MatiereService, MatiereService2 } from '../../../services/matiere.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-matiere-edit',
  templateUrl: './matiere-edit.component.html',
  styleUrls: ['./matiere-edit.component.css']
})
export class MatiereEditComponent implements OnInit {

  @ViewChild(FormGroupDirective, { static: true }) ngForm: { resetForm: () => void; };

  form: FormGroup;
  hasError = false;
  id: number;
  error: string;
  matieres: Matiere[];

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onUpdating = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix

  constructor(
    private fb: FormBuilder,
    private service: MatiereService,
    private service2: MatiereService2,

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
      const matiere = new Matiere('');
      matiere.id = this.form.value.id;
      matiere.nom = this.form.value.nom;

      this.onUpdating.emit(matiere);
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
