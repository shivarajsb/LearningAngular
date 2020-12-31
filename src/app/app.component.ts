import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, forkJoin, combineLatest } from 'rxjs';
import { take, scan, mapTo, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'LearningAngular';
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.data.subscribe((val) => console.log('This is the value', val));
  }

  navigate(val: string) {
    this.router.navigate([val]);
  }
}
