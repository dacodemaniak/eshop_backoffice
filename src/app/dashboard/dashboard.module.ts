
import { MaterialModule } from '@app/core/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from '@app/dashboard/dashboard-routing.module';
import { DynamicComponentLoaderModule } from '@app/dynamic-component-loader/dynamic-component-loader.module';
import { DashboardComponent } from '@app/dashboard/components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    DynamicComponentLoaderModule.forChild(MenuComponent)
  ],
  exports: [
    MaterialModule
  ],
  entryComponents: [
    MenuComponent
  ]
})
export class DashboardModule { }
