import { NgModule } from '@angular/core';
import { NbRouteTabsetModule } from '@nebular/theme';

import { HomeComponent } from './home.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { HomeRoutingModule } from './home-routing.module';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { ManageExchangeComponent } from './manage-exchange/manage-exchange.component';
import { UpdateIPODetailsComponent } from './update-ipodetails/update-ipodetails.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    NbRouteTabsetModule,
  ],
  declarations: [
    HomeComponent,
    ImportDataComponent,
    ManageCompanyComponent,
    ManageExchangeComponent,
    UpdateIPODetailsComponent,
  ],
})
export class HomeModule { }
