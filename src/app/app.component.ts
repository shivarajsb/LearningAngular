import { Component } from '@angular/core';
import { interval, forkJoin, combineLatest } from 'rxjs';
import { take, scan, mapTo, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LearningAngular';
  constructor() {
    const scanstream = interval(1000).pipe(
      mapTo(4),
      scan((a, c) => a + c, 0)
    );
    const reduceStream = interval(1000).pipe(
      mapTo(4),
      take(5),
      reduce((a, c) => a + c, 0)
    );
    scanstream.subscribe((val) => console.log('Scan ' + val));
    reduceStream.subscribe((val) => console.log('Reduce ' + val));
  }
  increment() {
    console.log('Incrementing');
  }
  decrement() {
    console.log('decrementing');
  }
}
