import { NiveauService } from './../../services/niveau.service';
import { Niveau } from './../../models/niveau';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-niveau-select',
  templateUrl: './niveau-select.component.html',
  styleUrls: ['./niveau-select.component.css']
})
export class NiveauSelectComponent implements OnInit {

  @Input() form: FormGroup;
  niveaux: Niveau[] = [];

  constructor(private service: NiveauService) { }

  ngOnInit() {
    this.service.getNiveau().subscribe(res => {
      this.niveaux = res;
    });
  }

}
