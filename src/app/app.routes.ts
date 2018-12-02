import { Routes, RouterModule } from '@angular/router'

import { PagesComponent } from "./pages/pages.component"

import { DashboardComponent } from './pages/dashboard/dashboars.component'
import { LoginComponent } from './login/login.component'
import { ProgressComponent } from './pages/progress/progess.component'
import { GraphicOneComponent } from './pages/graphicone/graphicone.component'
import { NopageFoundComponent } from './shared/nopagefound/nopagefound.component'
import { RegisterComponent } from "./login/register.component";
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { PromiseComponent } from './pages/promises/promise.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';

const appRoutes:Routes = [
    {
        path:'',
        component:PagesComponent,
        children:[
            {path:'dashboard',          component:DashboardComponent },
            {path:'progress',           component:ProgressComponent},
            {path:'graphicsone',        component:GraphicOneComponent},
            {path:'account-settings',   component:AccountSettingsComponent},
            {path:'promesas',           component:PromiseComponent},
            {path:'RxJs',               component:RxjsComponent},
            {path:'', redirectTo:'/dashboard', pathMatch:'full'},
        ]
    },
    {path:'login',      component:LoginComponent},
    {path:'register',   component:RegisterComponent},
    {path:'**',         component:NopageFoundComponent}
]

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash:true })