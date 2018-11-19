
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from '@app/core/auth/pages/login/login.component';

import { MaterialModule } from '@app/core/material/material.module';
import { UiModule } from '@app/ui/ui.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    UiModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    UiModule,
    LoginComponent
  ]
})
export class AuthModule { }
