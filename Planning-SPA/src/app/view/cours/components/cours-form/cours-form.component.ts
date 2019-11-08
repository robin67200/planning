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
  hasError = false;
  isUpdating = false;
  error: string;
  courss: Cours[] = [];
  bsConfig: Partial<BsDatepickerConfig>;

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
      // id: new FormControl(0, [Validators.required]),
      title: new FormControl('', [Validators.required]),
      room: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      start: new FormControl('', [Validators.required]),
      end: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      professeurId: new FormControl(0, [Validators.required]),
      matiereId: new FormControl(0, [Validators.required]),
      anneeId: new FormControl(0, [Validators.required]),
    });

  }

  get title() {return this.form.get('title'); }
  get room() {return this.form.get('room'); }
  get date() {return this.form.get('date'); }
  get start() {return this.form.get('start'); }
  get end() {return this.form.get('end'); }
  get color() {return this.form.get('color'); }
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
      const courss = new Cours('', '', new Date() , new Date() , new Date(), '', 0, 0, 0);
      // courss.id = this.form.value.id;
      courss.title = this.form.value.title;
      courss.room = this.form.value.room;
      courss.date = this.form.value.date;
      courss.start = this.form.value.start;
      courss.end = this.form.value.end;
      courss.color = this.form.value.color;
      courss.professeurId = this.form.value.professeurId;
      courss.matiereId = this.form.value.matiereId;
      courss.anneeId = this.form.value.anneeId;


      if (this.isUpdating) {
        this.onUpdating.emit(courss);
      } else {
        this.onCreating.emit(courss);
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
        case this.form.controls.date:
          this.error = `La date est à rentrer`;
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
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  close() {
    this.form.reset();
    this.onClose.emit(null);
  }

}
