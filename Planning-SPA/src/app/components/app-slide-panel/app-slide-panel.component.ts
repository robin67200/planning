import { Component, OnInit, Input, Renderer, } from '@angular/core';
import { animate, transition, trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-app-slide-panel',
  templateUrl: './app-slide-panel.component.html',
  styleUrls: ['./app-slide-panel.component.css'],
  animations: [
  trigger('slideInOut', [
    state(
      'in',
      style({
        transform: 'translateX(0)'
      })
    ),
    state(
      'out',
      style({
        transform: 'translateX(-50%)'
      })
    ),
    transition('* => *', animate('2s ease-in-out')),
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
@Input() width = '700px';

constructor(private renderer: Renderer) { }

ngOnInit() {}

display(args: any) {
  this.displayed = true;
  this.renderer.setElementStyle(document.body, 'overflow-y', 'hidden');
}

hide() {
  this.displayed = false;
  this.renderer.setElementStyle(document.body, 'overflow-y', 'auto');
}

}

