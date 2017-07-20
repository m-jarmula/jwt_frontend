import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ProfileComponent } from './profile/profile.component';
import { Angular2TokenService } from 'angular2-token';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AuthService } from './auth/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    TopMenuComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [Angular2TokenService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
