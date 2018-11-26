
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from '@app/shared/components/carousel/carousel.component';
import { UserMenuComponent } from '@app/shared/components/user-menu/user-menu.component';
@NgModule({
  declarations: [CarouselComponent, UserMenuComponent],
  imports: [
    CommonModule
  ],
  exports : [
    CarouselComponent,
    UserMenuComponent
  ]
})
export class SharedComponentsModule { }
