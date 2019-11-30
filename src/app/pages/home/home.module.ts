import { NgModule } from '@angular/core';
import { NbRouteTabsetModule, NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule } from '@nebular/theme';

import { HomeComponent } from './home.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { HomeRoutingModule } from './home-routing.module';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { ManageExchangeComponent } from './manage-exchange/manage-exchange.component';
import { UpdateIPODetailsComponent } from './update-ipodetails/update-ipodetails.component';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    HomeRoutingModule,
    NbRouteTabsetModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
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
