import { EleveService2 } from './../../services/eleve.service';
import { Eleve } from './../../models/eleve';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-eleve-form',
  templateUrl: './eleve-form.component.html',
  styleUrls: ['./eleve-form.component.css']
})
export class EleveFormComponent implements OnInit {

  form: FormGroup;
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
    private service: EleveService2
  ) {
    this.form = this.fb.group({
      // id: new FormControl(0, [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required,
        Validators.email]),
      telephone: new FormControl('', [Validators.required]),
      dateNaissance: new FormControl(new Date(), [Validators.required]),
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
      const eleves = new Eleve('', '', '', '', '', new Date(), 0);
      // eleves.id = this.form.value.id;
      eleves.nom = this.form.value.nom;
      eleves.prenom = this.form.value.prenom;
      eleves.adresse = this.form.value.adresse;
      eleves.mail = this.form.value.mail;
      eleves.telephone = this.form.value.telephone;
      eleves.dateNaissance = this.form.value.dateNaissance;
      eleves.classeId = this.form.value.classeId;

      if (this.isUpdating) {
        this.onUpdating.emit(eleves);
      } else {
        this.onCreating.emit(eleves);
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
