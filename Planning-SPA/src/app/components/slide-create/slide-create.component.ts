import { Component, OnInit, Input, Renderer, Renderer2 } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-slide-create',
  templateUrl: './slide-create.component.html',
  styleUrls: ['./slide-create.component.css'],
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
      transition('* <=> *', animate('2s ease-in-out')),
    ])
  ]
})
export class SlideCreateComponent implements OnInit {
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

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  display(args: any) {
    this.displayed = true;
    this.renderer.setStyle(document.body, 'overflow-y', 'hidden');
  }

  hide() {
    this.displayed = false;
    this.renderer.setStyle(document.body, 'overflow-y', 'auto');
  }

}
