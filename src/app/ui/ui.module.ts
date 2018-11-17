
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/core/material/material.module';
import { LayoutComponent } from '@app/ui/layout/layout.component';
import { HeaderComponent } from '@app/ui/header/header.component';
import { FooterComponent } from '@app/ui/footer/footer.component';
import { AppRoutingModule } from '@app/app-routing.module';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
