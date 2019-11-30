import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  tabs = [
    {
      title: 'Import Data',
      route: '/pages/home/import-data',
    },
    {
      title: 'Manage Company',
      route: '/pages/home/manage-company',
    },
    {
      title: 'Manage Exchange',
      route: '/pages/home/manage-exchange',
    },
    {
      title: 'Update IPO Details',
      route: '/pages/home/update-ipo-details',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
