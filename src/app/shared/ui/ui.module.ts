


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/shared/material/material.module';
import { LayoutComponent } from '@app/shared/ui/layout/layout.component';
import { HeaderComponent } from '@app/shared/ui/header/header.component';
import { FooterComponent } from '@app/shared/ui/footer/footer.component';

import { UserMenuComponent } from '@app/shared/components/user-menu/user-menu.component';
import { CarouselComponent } from '@app/shared/components/carousel/carousel.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    UserMenuComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LayoutComponent,
    UserMenuComponent,
    CarouselComponent
  ]
})
export class UiModule { }
