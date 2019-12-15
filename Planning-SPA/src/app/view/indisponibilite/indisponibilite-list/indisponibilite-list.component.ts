import { IndisponibiliteModalsComponent } from './../indisponibilite-modals/indisponibilite-modals.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Output } from '@angular/core';
import { IndisponibiliteService, IndisponibiliteService3 } from '../services/indisponibilite.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { ProfService } from '../../prof/services/prof.service';
import { Prof } from '../../prof/models/prof';
import { Indisponibilite } from '../models/indisponibilite';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { registerLocaleData, formatDate } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BsDatepickerConfig, BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AlertifyService } from '../../_services/alertify.service';
import { EleveModalsComponent } from '../../eleve/eleve-modals/eleve-modals.component';


registerLocaleData(localeFr);

@Component({
  selector: 'app-indisponibilite-list',
  templateUrl: './indisponibilite-list.component.html',
  styleUrls: ['./indisponibilite-list.component.css']
})
export class IndisponibiliteListComponent implements OnInit {


  form: FormGroup;
  formProf: FormGroup;
  indispos: Indisponibilite[] = [];
  profs: Prof[] = [];
  indisp: Indisponibilite;
  date = new Date();
  affichage: boolean;
  bsModalRef: BsModalRef;
  format = 'yyyy-MM-dd';
  myDate = '01/01/2019';
  locale = 'en-FR';

  constructor(
    private service: IndisponibiliteService,
    private service2: IndisponibiliteService3<Indisponibilite, number>,
    private profService: ProfService,
    private modals: SimpleModalService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private alertify: AlertifyService
  ) {
    this.form = this.fb.group({
      datee: new FormControl(null, [Validators.required])
    });
    this.formProf = this.fb.group({
      professeurId: new FormControl(0, [Validators.required])
    });
  }

  get datee() {return this.form.get; }

  ngOnInit() {
    this.service.getByDateToday().subscribe(res => {
      this.indispos = res;
      this.profService.getProf().subscribe(profs => {
        this.profs = profs;
        this.indispos.forEach(i => {
          const prof = this.profs.find(p => p.id === i.professeurId);
          i.profName = prof.nom;
        });
      });
    });
    this.affichage = true;
    this.form.reset();
  }

  searchByProf() {
    const professeur = this.formProf.value.professeurId;
    this.service.searchByProf(professeur).subscribe(res => {
      this.indispos = res;
      this.profService.getProf().subscribe(profs => {
        this.profs = profs;
        this.indispos.forEach(i => {
          const prof = this.profs.find(p => p.id === i.professeurId);
          i.profName = prof.nom;
        });
      });
    });
    this.formProf.reset();
  }

  save() {
    const date = this.form.value.datee;
    this.service.searchDate(date).subscribe(res => {
      this.indispos = res;
      this.profService.getProf().subscribe(profs => {
        this.profs = profs;
        this.indispos.forEach(i => {
          const prof = this.profs.find(p => p.id === i.professeurId);
          i.profName = prof.nom;
        });
      });
    });
  }

  getIndispAll() {
    this.service.getIndisponibilites().subscribe(res => {
      this.indispos = res;
      this.profService.getProf().subscribe(profs => {
        this.profs = profs;
        this.indispos.forEach(i => {
          const prof = this.profs.find(p => p.id === i.professeurId);
          i.profName = prof.nom;
        });
      });
    });
    this.affichage = false;
  }

  openIndisp(indisp: Indisponibilite) {
    this.service2.pushObject(indisp);
  }

  onIndispUpdated(indisp: Indisponibilite) {
    this.service.putIndisponibiliteWithControl(indisp.id, indisp).subscribe((result) => {
      this.ngOnInit();
      this.alertify.succes('Modifié');
    }, error => {
      this.alertify.error('date de début supérieure à date de fin');
    });
  }

  onIndispCreated(indisp: Indisponibilite) {
    this.service.postIndisponibiliteWithControl(indisp).subscribe(result => {
      // this.classes.push(result);
      this.ngOnInit();
      this.alertify.succes('Ajouté');
    }, error => {
      this.alertify.error('date de début supérieure à date de fin');
    });
  }

  deleteIndisp(indisp: Indisponibilite) {
    const initialState = {
      indisp
    };
    this.bsModalRef = this.modalService.show(IndisponibiliteModalsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';

  }
}
