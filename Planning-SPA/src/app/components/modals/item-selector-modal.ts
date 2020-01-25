import { ListItem } from '../model/list-item';
import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
export interface SimpleInputModel {
  title: string;
  items: ListItem[];
}
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'modal-confirm',
  template: `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 style="text-align: center">{{ title }}</h4>
        </div>
        <div class="modal-body">
          <ul>
            <li *ngFor="let item of items">
              <a href="javascript:void(0);" (click)="confirm(item)">{{
                item.label
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer><button class="btn btn-primary" (click)="close()">fermer</button></footer>
  `
})
export class ModalItemSelectorComponent
  extends SimpleModalComponent<SimpleInputModel, ListItem>
  implements SimpleInputModel, OnInit {
  title: string;
  items: ListItem[];

  constructor() {
    super();
  }

  ngOnInit() {}
  confirm(item: ListItem) {
    this.result = item;
    this.close();
  }

  cancel() {
    this.close();
  }
}
