import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Classe } from '../../models/classe';
import { ClasseService2 } from '../../services/classe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classe-form',
  templateUrl: './classe-form.component.html',
  styleUrls: ['./classe-form.component.css']
})
export class ClasseFormComponent implements OnInit {

  form: FormGroup;
  id: number;
  hasError = false;
  isUpdating = false;
  error: string;
  classes: Classe[] = [];

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onCreating = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onUpdating = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private service: ClasseService2,
    route: ActivatedRoute,

  ) {
    this.form = this.fb.group({
      id: new FormControl(0, [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      anneeId: new FormControl(0, [Validators.required]),
      niveauId: new FormControl(0, [Validators.required]),
    });
  }
  get nom() {return this.form.get('nom'); }
  get niveauId() {return this.form.get('niveauId'); }
  get anneeId() {return this.form.get('anneeId'); }

  ngOnInit() {
    this.service.objectChanged().subscribe(classes => {
      this.form.patchValue(classes);
      this.isUpdating = true;
    });
  }

  save() {
    if (this.form.valid) {
      this.hasError = false;
      const classe = new Classe('', 0 , 0);
      classe.id = this.form.value.id;
      classe.nom = this.form.value.nom;
      classe.niveauId = this.form.value.niveauId;
      classe.anneeId = this.form.value.anneeId;


      if (this.isUpdating) {
        this.onUpdating.emit(classe);
      } else {
        this.onCreating.emit(classe);
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
          this.error = 'Le titre est obligatoire';
          break;
        case this.form.controls.niveauId:
          this.error = `Le niveau est obligatoire`;
          break;
        case this.form.controls.anneeId:
          this.error = `La date est à rentrer`;
          break;
      }
    }
  }

  close() {
    this.form.reset();
    this.onClose.emit(null);
  }

}
