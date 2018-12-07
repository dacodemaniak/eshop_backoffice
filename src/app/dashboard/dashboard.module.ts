import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/core/material/material.module';

import { DashboardRoutingModule } from '@app/dashboard/dashboard-routing.module';
import { DashboardComponent } from '@app/dashboard/components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { AuthModule } from '@app/core/auth/auth.module';
@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent,
    ShopListComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    MaterialModule,
    DashboardRoutingModule
  ],
  exports: [
    MaterialModule
  ]
})
export class DashboardModule { }
