import { AnneeService } from './../../services/annee.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Annee } from '../../models/annee';

@Component({
  selector: 'app-annee-select',
  templateUrl: './annee-select.component.html',
  styleUrls: ['./annee-select.component.css']
})
export class AnneeSelectComponent implements OnInit {

  @Input() form: FormGroup;
  annees: Annee[] = [];

  constructor(private service: AnneeService) { }

  ngOnInit() {
    this.service.getAnnee().subscribe(res => {
      this.annees = res;
    });
  }

}
