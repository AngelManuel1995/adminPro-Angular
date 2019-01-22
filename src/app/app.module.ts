import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module'
import { APP_ROUTES } from './app.routes'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent, } from './login/login.component'
import { RegisterComponent } from "./login/register.component";
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,//Queda
    RegisterComponent, EjemploComponent, Ejemplo1Component, Ejemplo2Component//Queda
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
