import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

// template: `
// <ngx-one-column-layout>
//   <nb-menu [items]="menu"></nb-menu>
//   <router-outlet></router-outlet>
// </ngx-one-column-layout>
// `
// `
//     <ngx-one-column-layout-with-no-sidebar>
//       <router-outlet></router-outlet>
//     </ngx-one-column-layout-with-no-sidebar>
//   `

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
  <ngx-one-column-layout-with-no-sidebar>
    <router-outlet></router-outlet>
  </ngx-one-column-layout-with-no-sidebar>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
