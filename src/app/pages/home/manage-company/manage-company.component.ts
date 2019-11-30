import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'ngx-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.scss'],
})
export class ManageCompanyComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      companyName: {
        title: 'Company Name',
        type: 'number',
      },
      ceoName: {
        title: 'CEO Name',
        type: 'string',
      },
      turnOver: {
        title: 'Turn Over',
        type: 'string',
      },
      briefDescription: {
        title: 'Brif DES',
        type: 'string',
      },
      ipoDate: {
        title: 'IPO Date',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.companyService.getData().subscribe(data => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'companyName',
        search: query,
      },
      {
        field: 'ceoName',
        search: query,
      },
      {
        field: 'turnOver',
        search: query,
      },
      {
        field: 'briefDescription',
        search: query,
      },
      {
        field: 'ipoDate',
        search: query,
      },
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
}
