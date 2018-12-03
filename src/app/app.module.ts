
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UiModule } from '@app/ui/ui.module';
import { AuthModule } from '@app/core/auth/auth.module';
import { MaterialModule } from '@app/core/material/material.module';
import { SharedComponentsModule } from './shared/shared-components/shared-components.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthenticationService } from '@app/core/auth/services/authentication.service';


export function appInit(userLoader: AuthenticationService) {
  return () => userLoader.initialize().then((user) => {
    console.log(user);
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiModule,
    AuthModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedComponentsModule,
    DashboardModule
  ],
  providers: [
    AuthenticationService,
    { provide: APP_INITIALIZER, useFactory: appInit, deps: [AuthenticationService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
