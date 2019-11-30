import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.scss'],
})
export class ImportDataComponent implements OnInit {

  private success: boolean = false;
  private info: any;

  constructor() { }

  ngOnInit() {
    this.info = {
      companyName: 'Abc LTD',
      stockExchange: 'BSE',
      records: 80,
      startDate: '2015/09/7',
      endDate: '2015/11/20',
    };
  }

  upload() {
    this.success = true;
  }

  changeStep(nav: any, action: any) {
    nav[action].bind(nav);
    if (this.success) {
      nav[action]();
    }
  }
}
