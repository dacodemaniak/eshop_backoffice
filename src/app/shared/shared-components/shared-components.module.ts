import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/core/material/material.module';
import { CarouselComponent } from '@app/shared/components/carousel/carousel.component';
import { UserMenuComponent } from '@app/shared/components/user-menu/user-menu.component';
@NgModule({
  declarations: [CarouselComponent, UserMenuComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports : [
    CarouselComponent,
    UserMenuComponent,
    FlexLayoutModule
  ]
})
export class SharedComponentsModule { }
