import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Matiere } from '../../../models/matiere';
import { FormGroupDirective, FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matiere-create',
  templateUrl: './matiere-create.component.html',
  styleUrls: ['./matiere-create.component.css']
})
export class MatiereCreateComponent implements OnInit {

  @ViewChild(FormGroupDirective, { static: true }) ngForm: { resetForm: () => void; };

  form: FormGroup;
  hasError = false;
  id: number;
  error: string;
  matieres: Matiere[] = [];

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
      const matiere = new Matiere('');
      matiere.nom = this.form.value.nom;

      this.onCreating.emit(matiere);
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
