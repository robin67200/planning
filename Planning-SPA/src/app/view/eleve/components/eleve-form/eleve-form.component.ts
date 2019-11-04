import { EleveService2 } from './../../services/eleve.service';
import { Eleve } from './../../models/eleve';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-eleve-form',
  templateUrl: './eleve-form.component.html',
  styleUrls: ['./eleve-form.component.css']
})
export class EleveFormComponent implements OnInit {

  form: FormGroup;
  id: number;
  hasError = false;
  isUpdating = false;
  error: string;
  eleves: Eleve[] = [];
  bsConfig: Partial<BsDatepickerConfig>;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onCreating = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onUpdating = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private service: EleveService2,
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
  }

  get nom() {return this.form.get('nom'); }
  get prenom() {return this.form.get('prenom'); }
  get adresse() {return this.form.get('adresse'); }
  get mail() {return this.form.get('mail'); }
  get telephone() {return this.form.get('telephone'); }
  get dateNaissance() {return this.form.get('dateNaissance'); }
  get classeId() {return this.form.get('classeId'); }

  ngOnInit() {
    this.service.objectChanged().subscribe(eleves => {
      this.form.patchValue(eleves);
      this.isUpdating = true;
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

      if (this.isUpdating) {
        this.onUpdating.emit(eleve);
      } else {
        this.onCreating.emit(eleve);
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
        case this.form.controls.dateNaissance:
          this.error = `La date de naissance est obligatoire`;
          break;
        case this.form.controls.classeId:
          this.error = `La date de naissance est obligatoire`;
          break;
      }
    }
  }

  close() {
    this.form.reset();
    this.onClose.emit(null);
  }

}
