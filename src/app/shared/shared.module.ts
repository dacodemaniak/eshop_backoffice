import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/shared/material/material.module';
import { UiModule } from '@app/shared/ui/ui.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    UiModule,
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    UiModule
  ]
})
export class SharedModule {

  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
