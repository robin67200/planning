import { MatiereService } from './../../services/matiere.service';
import { Matiere } from './../../models/matiere';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-matiere-select',
  templateUrl: './matiere-select.component.html',
  styleUrls: ['./matiere-select.component.css']
})
export class MatiereSelectComponent implements OnInit {

  @Input() form: FormGroup;
  matieres: Matiere[] = [];

  constructor(private service: MatiereService) { }

  ngOnInit() {
    this.service.getMatiere().subscribe(res => {
      this.matieres = res;
    });
  }

}
