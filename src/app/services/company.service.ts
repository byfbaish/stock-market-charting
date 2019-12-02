import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from '../models/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private data: Company[];

  constructor() { }

  getData(): Observable<Company[]> {
    this.data = [];
    for (let i = 0; i < 10; i++) {
      let company = new Company();
      company.companyName = 'Company' + i;
      company.ceoName = 'CEO' + i;
      company.turnOver = 'TurnOver' + i;
      company.briefDescription = 'Brief Description' + i;
      company.ipoDate = 'IPO Date' + i;

      this.data.push(company);
    }

    return of(this.data);
  }
}
