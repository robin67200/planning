import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ActivatedRoute, Params } from '@angular/router';
import { SimpleModalService } from 'ngx-simple-modal';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Prof } from 'src/app/view/prof/models/prof';
import { ProfService } from 'src/app/view/prof/services/prof.service';
import { AlertifyService } from 'src/app/view/_services/alertify.service';
import { Matiere } from 'src/app/view/matiere/models/matiere';
import { Classe } from 'src/app/view/classe/models/classe';
import { Cours } from '../../models/cours';

@Component({
  selector: 'app-prof-stats',
  templateUrl: './prof-stats.component.html',
  styleUrls: ['./prof-stats.component.css']
})
export class ProfStatsComponent implements OnInit {

  id: number;
  matiereId: number;
  prof: Prof = new Prof('', '', '', '', 0, 0);
  profs: Prof = new Prof('', '', '', '', 0, 0);
  bsModalRef: BsModalRef;
  matieres: Matiere[];
  classes: Classe[];
  cours: Cours[];
  matiere: Matiere;
  date = Date.now();


  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = ['Math', 'Français'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];

  constructor(
    route: ActivatedRoute,
    private serviceProf: ProfService,
    private modals: SimpleModalService,
    private modalService: BsModalService,
    private alertify: AlertifyService
  ) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
   }

  ngOnInit() {
    this.serviceProf.getProfById(this.id).subscribe(res => {
      this.prof = res;
    });
}
}
