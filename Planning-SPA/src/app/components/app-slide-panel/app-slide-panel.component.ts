import { Component, OnInit, Input, Renderer, Renderer2, } from '@angular/core';
import { animate, transition, trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-app-slide-panel',
  templateUrl: './app-slide-panel.component.html',
  styleUrls: ['./app-slide-panel.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('200ms ease-in-out')
      ]),
      transition(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('200ms ease-in-out')
      ])
    ])
  ]
})
export class AppSlidePanelComponent implements OnInit {
@Input()
displayed = false;
@Input()
header: string;
@Input()
footer: string;
@Input()
displayHeader = true;
@Input()
displayFooter = false;
@Input() width = '600px';

constructor(private renderer: Renderer2) { }

ngOnInit() {}

display(args: any) {
  this.displayed = true;
  this.renderer.setStyle(document.body, 'overflow-y', 'hidden');
}

hide() {
  this.displayed = false;
  this.renderer.setStyle(document.body, 'overflow-y', 'auto');
}

}

