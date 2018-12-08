import { AuthGuardService } from './auth/services/auth-guard.service';
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { AuthModule } from '@app/core/auth/auth.module';
import { AuthenticationService } from '@app/core/auth/services/authentication.service';
import { InterceptorService } from '@app/core/auth/services/interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    SharedModule
  ],
  exports: [],
  providers: [
    AuthenticationService,
    AuthGuardService,
    InterceptorService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('Le module Core est déjà importé');
    }
  }
}
