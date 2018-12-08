import { AuthGuardService } from '@app/core/auth/services/auth-guard.service';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@app/dashboard/components/dashboard/dashboard.component';
import { ShopListComponent } from '@app/dashboard/components/shop-list/shop-list.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'shops',
    component: ShopListComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})

export class DashboardRoutingModule {}
