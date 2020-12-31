import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-container',
  templateUrl: './first-container.component.html',
  styleUrls: ['./first-container.component.css'],
})
export class FirstContainerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigate(val: string) {
    this.router.navigate(['first', val]);
  }
}
