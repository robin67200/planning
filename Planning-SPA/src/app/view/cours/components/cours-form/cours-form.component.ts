import { Cours } from './../../models/cours';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { CoursService2 } from '../../services/cours.service';

@Component({
  selector: 'app-cours-form',
  templateUrl: './cours-form.component.html',
  styleUrls: ['./cours-form.component.css']
})
export class CoursFormComponent implements OnInit {

  form: FormGroup;
  id: number;
  hasError = false;
  isUpdating = false;
  error: string;
  courss: Cours[] = [];

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onCreating = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onUpdating = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private service: CoursService2
  ) {
    this.form = this.fb.group({
      id: new FormControl(0, [Validators.required]),
      title: new FormControl('', [Validators.required]),
      room: new FormControl('', [Validators.required]),
      start: new FormControl('', [Validators.required]),
      end: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      color2: new FormControl('', [Validators.required]),
      professeurId: new FormControl(0, [Validators.required]),
      matiereId: new FormControl(0, [Validators.required]),
      classeId: new FormControl(0, [Validators.required]),
    });

  }

  get title() {return this.form.get('title'); }
  get room() {return this.form.get('room'); }
  get start() {return this.form.get('start'); }
  get end() {return this.form.get('end'); }
  get color() {return this.form.get('color'); }
  get color2() {return this.form.get('color2'); }
  get professeurId() {return this.form.get('professeurId'); }
  get matiereId() {return this.form.get('matiereId'); }
  get anneeId() {return this.form.get('anneeId'); }

  ngOnInit() {
    this.service.objectChanged().subscribe(courss => {
      this.form.patchValue(courss);
      this.isUpdating = true;
    });
  }

  save() {
    if (this.form.valid) {
      this.hasError = false;
      const cours = new Cours('', '' , new Date() , new Date(), '', '', 0, 0, 0);
      cours.id = this.form.value.id;
      cours.title = this.form.value.title;
      cours.room = this.form.value.room;
      cours.start = this.form.value.start;
      cours.end = this.form.value.end;
      cours.color = this.form.value.color;
      cours.color2 = this.form.value.color2;
      cours.professeurId = this.form.value.professeurId;
      cours.matiereId = this.form.value.matiereId;
      cours.classeId = this.form.value.classeId;


      if (this.isUpdating) {
        this.onUpdating.emit(cours);
      } else {
        this.onCreating.emit(cours);
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
        case this.form.controls.title:
          this.error = 'Le titre est obligatoire';
          break;
        case this.form.controls.room:
          this.error = `La salle est obligatoire`;
          break;
        case this.form.controls.start:
          this.error = `L'heure de début est obligatoire`;
          break;
        case this.form.controls.end:
          this.error = `L'heure de fin est obligatoire et doit être valide`;
          break;
        case this.form.controls.color:
          this.error = `La couleur est obligatoire`;
          break;
        case this.form.controls.color:
          this.error = `La couleur est obligatoire`;
          break;
        case this.form.controls.professeurId:
          this.error = `Le numéro de prof est obligatoire`;
          break;
        case this.form.controls.matiereId:
          this.error = `Le numéro de matière est obligatoire`;
          break;
        case this.form.controls.anneeId:
          this.error = `Le numéro de année est obligatoire`;
          break;
      }
    }
  }

  close() {
    this.form.reset();
    this.onClose.emit(null);
  }

}
