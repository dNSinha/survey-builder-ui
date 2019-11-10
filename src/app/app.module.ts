import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginService } from './shared/login.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { ErrorComponent } from './error/error.component';
import { EntryFormsModule } from './entry-forms/entry-forms.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    DashboardComponent,
    CommingSoonComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    EntryFormsModule,
    DashboardModule,
    SharedModule,
    Routing
  ],
  providers: [
    LoginService, HttpClient
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
