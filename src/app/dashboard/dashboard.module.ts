import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { DashboardRoutingModule } from '@app/dashboard/dashboard-routing.module';
import { DashboardComponent } from '@app/dashboard/components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent,
    ShopListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ],
  exports: [],
  providers: [],
})
export class DashboardModule { }
