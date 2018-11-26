import { CarouselComponent } from '@app/shared/components/carousel/carousel.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SharedComponentsModule } from '@app/shared/shared-components/shared-components.module';

import { LoginComponent } from '@app/core/auth/pages/login/login.component';

import { MaterialModule } from '@app/core/material/material.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedComponentsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LoginComponent
  ]
})
export class AuthModule { }
