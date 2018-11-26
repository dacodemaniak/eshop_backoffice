import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/core/material/material.module';
import { LayoutComponent } from '@app/ui/layout/layout.component';
import { HeaderComponent } from '@app/ui/header/header.component';
import { FooterComponent } from '@app/ui/footer/footer.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { AuthModule } from '@app/core/auth/auth.module';
import { SharedComponentsModule } from '@app/shared/shared-components/shared-components.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    AuthModule,
    SharedComponentsModule
  ],
  exports: [
    FlexLayoutModule,
    LayoutComponent
  ]
})
export class UiModule { }
