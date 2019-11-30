import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { ManageExchangeComponent } from './manage-exchange/manage-exchange.component';
import { UpdateIPODetailsComponent } from './update-ipodetails/update-ipodetails.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'import-data',
        component: ImportDataComponent,
      },
      {
        path: 'manage-company',
        component: ManageCompanyComponent,
      },
      {
        path: 'manage-exchange',
        component: ManageExchangeComponent,
      },
      {
        path: 'update-ipo-details',
        component: UpdateIPODetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class HomeRoutingModule {
}
