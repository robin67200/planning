import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Prof } from '../../models/prof';
import { ProfService } from '../../services/prof.service';

@Component({
  selector: 'app-prof-select',
  templateUrl: './prof-select.component.html',
  styleUrls: ['./prof-select.component.css']
})
export class ProfSelectComponent implements OnInit {

  @Input() form: FormGroup;
  profs: Prof[] = [];

  constructor(private service: ProfService) { }

  ngOnInit() {
    this.service.getProf().subscribe(res => {
      this.profs = res;
    });
  }

}
