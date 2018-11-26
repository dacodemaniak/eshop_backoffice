import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/core/material/material.module';
import { LayoutComponent } from '@app/ui/layout/layout.component';
import { HeaderComponent } from '@app/ui/header/header.component';
import { FooterComponent } from '@app/ui/footer/footer.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, CarouselComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    FlexLayoutModule,
    LayoutComponent,
    CarouselComponent
  ]
})
export class UiModule { }
