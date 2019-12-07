import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, FormGroupDirective } from '@angular/forms';
import { Cours } from '../../models/cours';
import { Room } from '../cours-form/cours-form.component';
import { CoursService2 } from '../../services/cours.service';

@Component({
  selector: 'app-cours-form-edit',
  templateUrl: './cours-form-edit.component.html',
  styleUrls: ['./cours-form-edit.component.css']
})
export class CoursFormEditComponent implements OnInit {

  @ViewChild(FormGroupDirective, { static: true }) ngForm: { resetForm: () => void; };

  form: FormGroup;
  id: number;
  hasError = false;
  error: string;
  courss: Cours[] = [];

  rooms: Room[] = [
    {value: 's1', viewValue: 'S1'},
    {value: 's2', viewValue: 'S2'},
    {value: 's3', viewValue: 'S3'},
    {value: 's4', viewValue: 'S4'},
    {value: 's5', viewValue: 'S5'},
    {value: 's6', viewValue: 'S6'},
    {value: 's7', viewValue: 'S7'},
    {value: 's8', viewValue: 'S8'},
    {value: 's9', viewValue: 'S9'},
    {value: 's10', viewValue: 'S10'},

  ];

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onUpdating = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private service: CoursService2
  ) {
    this.form = this.fb.group({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      room: new FormControl('', [Validators.required]),
      start: new FormControl('', [Validators.required]),
      end: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      color2: new FormControl('', [Validators.required]),
      professeurId: new FormControl(0, [Validators.required]),
      matiereId: new FormControl(0, [Validators.required]),
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

  ngOnInit() {
    this.service.objectChanged().subscribe(courss => {
      this.form.patchValue(courss);
    });
  }

  save() {
    if (this.form.valid) {
      this.hasError = false;
      const cours = new Cours('', '' , new Date() , new Date(), '', '', 0, 0);
      cours.id = this.form.value.id;
      cours.title = this.form.value.title;
      cours.room = this.form.value.room;
      cours.start = this.form.value.start;
      cours.end = this.form.value.end;
      cours.color = this.form.value.color;
      cours.color2 = this.form.value.color2;
      cours.professeurId = this.form.value.professeurId;
      cours.matiereId = this.form.value.matiereId;

      this.onUpdating.emit(cours);
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

