import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//Importación de modulos.
import { PagesComponent } from "./pages/pages.component"
import { LoginComponent, } from './login/login.component'
import { GraphicOneComponent, } from './pages/graphicone/graphicone.component'
import { ProgressComponent, } from './pages/progress/progess.component'
import { BreadCrumbsComponent, } from './shared/breadcrumbs/breadcrumbs.component'
import { HeaderComponent, } from './shared/header/header.component'
import { NopageFoundComponent, } from './shared/nopagefound/nopagefound.component'
import { SidebarComponent, } from './shared/sidebar/sidebar.component'
import { DashboardComponent } from './pages/dashboard/dashboars.component'
import { RegisterComponent } from "./login/register.component";

/** Importación de los servicios */

import { SharedService, } from './services/shared/shared.service'
import { SidebarService, } from './services/sidebar/sidebar.service'

/** Importación de las rutas */

import { APP_ROUTES } from './app.roures'

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LoginComponent,
    GraphicOneComponent,
    ProgressComponent,
    BreadCrumbsComponent,
    HeaderComponent,
    NopageFoundComponent,
    SidebarComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [
    SharedService,
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
