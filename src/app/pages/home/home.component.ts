import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-home',
  template: `
    <router-outlet></router-outlet>
    <p>Home page is working.</p>
  `,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
