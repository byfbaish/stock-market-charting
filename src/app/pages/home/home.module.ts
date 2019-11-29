import { NgModule } from '@angular/core';
import {

} from '@nebular/theme';

import { HomeComponent } from './home.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    ImportDataComponent,
  ],
})
export class HomeModule { }
