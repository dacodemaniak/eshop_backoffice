import { AuthenticationService } from './services/authentication.service';
import { InterceptorService } from './services/interceptor.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SharedComponentsModule } from '@app/shared/shared-components/shared-components.module';

import { LoginComponent } from '@app/core/auth/pages/login/login.component';

import { MaterialModule } from '@app/core/material/material.module';
import { UiModule } from '@app/ui/ui.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
  ],
  providers: [
    AuthenticationService,
    InterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class AuthModule { }
