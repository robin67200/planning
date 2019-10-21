import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Classe } from '../../models/classe';
import { ClasseService } from '../../services/classe.service';

@Component({
  selector: 'app-classe-select',
  templateUrl: './classe-select.component.html',
  styleUrls: ['./classe-select.component.css']
})
export class ClasseSelectComponent implements OnInit {

  @Input() form: FormGroup;
  classes: Classe[] = [];

  constructor(private service: ClasseService) { }

  ngOnInit() {
    this.service.getClasse().subscribe(res => {
      this.classes = res;
    });
  }

}
