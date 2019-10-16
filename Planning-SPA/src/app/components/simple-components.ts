import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class SimpleComponent implements OnDestroy {
  protected $destroyed: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    this.$destroyed.next(true);
    this.$destroyed.complete();
  }
}
