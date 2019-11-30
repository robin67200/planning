import { defaultSimpleModalOptions } from 'ngx-simple-modal/dist/simple-modal/simple-modal-options';
import { Component, OnInit } from '@angular/core';
import { IndisponibiliteService, IndisponibiliteService3 } from '../services/indisponibilite.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { ProfService } from '../../prof/services/prof.service';
import { Prof } from '../../prof/models/prof';
import { Indisponibilite } from '../models/indisponibilite';
import { ModalConfirmComponent } from 'src/app/components/modals/confirm-modal';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';


registerLocaleData(localeFr);

@Component({
  selector: 'app-indisponibilite-list',
  templateUrl: './indisponibilite-list.component.html',
  styleUrls: ['./indisponibilite-list.component.css']
})
export class IndisponibiliteListComponent implements OnInit {



  indispos: Indisponibilite[] = [];
  profs: Prof[] = [];
  indisp: Indisponibilite;
  date = new Date();
  affichage: boolean;

  constructor(
    private service: IndisponibiliteService,
    private service2: IndisponibiliteService3<Indisponibilite, number>,
    private profService: ProfService,
    private modals: SimpleModalService
  ) { }

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



  deleteIndisp(indisp: Indisponibilite) {
    this.modals
      .addModal(ModalConfirmComponent, {
        title: `Supprimer l'indisponibilite du ${indisp.start} au ${indisp.end} de ${indisp.profName} ?`,
        message: 'Êtes-vous sûr de cette suppression ?'
      })
      .subscribe(result => {
        if (result) {
          this.service.deleteIndisponibiliteById(indisp.id).subscribe(res => {
            this.ngOnInit();
          });
        }
      });
  }

  openIndisp(indisp: Indisponibilite) {
    this.service2.pushObject(indisp);
  }

  onIndispUpdated(indisp: Indisponibilite) {
    this.service.putIndisponibilite(indisp.id, indisp).subscribe((result) => {
      this.ngOnInit();
    });
  }

  onIndispCreated(indisp: Indisponibilite) {
    this.service.postIndisponibilite(indisp).subscribe(result => {
      // this.classes.push(result);
      this.ngOnInit();
    });
  }

}
