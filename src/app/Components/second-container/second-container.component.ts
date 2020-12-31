import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-container',
  templateUrl: './second-container.component.html',
  styleUrls: ['./second-container.component.css'],
})
export class SecondContainerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(val: string) {
    this.router.navigate(['second', val]);
  }
}
