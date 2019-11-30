import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Eleve } from '../../models/eleve';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { EleveService, EleveService2 } from '../../services/eleve.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-eleve-form-edit',
  templateUrl: './eleve-form-edit.component.html',
  styleUrls: ['./eleve-form-edit.component.css']
})
export class EleveFormEditComponent implements OnInit {

  form: FormGroup;
  hasError = false;
  id: number;
  error: string;
  eleves: Eleve[];
  bsConfig: Partial<BsDatepickerConfig>;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onUpdating = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix

  constructor(
    private fb: FormBuilder,
    private service: EleveService,
    private service2: EleveService2,

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
      dateNaissance: new FormControl('', [Validators.required]),
      classeId: new FormControl(0, [Validators.required])
    });
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
  }

  get nom() {return this.form.get('nom'); }
  get prenom() {return this.form.get('prenom'); }
  get adresse() {return this.form.get('adresse'); }
  get mail() {return this.form.get('mail'); }
  get telephone() {return this.form.get('telephone'); }
  get dateNaissance() {return this.form.get('dateNaissance'); }
  get classeId() {return this.form.get('classeId'); }

  ngOnInit() {
    this.service2.objectChanged().subscribe(eleves => {
      this.form.patchValue(eleves);
    });
  }
  save() {
    if (this.form.valid) {
      this.hasError = false;
      const eleve = new Eleve('', '', '', '', '', new Date(), 0);
      eleve.id = this.form.value.id;
      eleve.nom = this.form.value.nom;
      eleve.prenom = this.form.value.prenom;
      eleve.adresse = this.form.value.adresse;
      eleve.mail = this.form.value.mail;
      eleve.telephone = this.form.value.telephone;
      eleve.dateNaissance = this.form.value.dateNaissance;
      eleve.classeId = this.form.value.classeId;

      this.onUpdating.emit(eleve);

      this.form.reset();
      this.form.controls.id.setValue(0);
  }
}

  close() {
    this.form.reset();
    this.onClose.emit(null);
  }

}
