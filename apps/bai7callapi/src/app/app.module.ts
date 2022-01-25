import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ListUserComponent } from './list-user/list-user.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InterceptorService} from "./Service/interceptor.service";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ListUserComponent],
  imports: [BrowserModule , HttpClientModule , MatProgressBarModule , BrowserAnimationsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
