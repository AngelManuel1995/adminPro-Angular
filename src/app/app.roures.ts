import { Routes, RouterModule } from '@angular/router'

import { PagesComponent } from "./pages/pages.component"

import { DashboardComponent } from './pages/dashboard/dashboars.component'
import { LoginComponent } from './login/login.component'
import { ProgressComponent } from './pages/progress/progess.component'
import { GraphicOneComponent } from './pages/graphicone/graphicone.component'
import { NopageFoundComponent } from './shared/nopagefound/nopagefound.component'
import { RegisterComponent } from "./login/register.component";

const appRoutes:Routes = [
    {
        path:'',
        component:PagesComponent,
        children:[
            {path:'dashboard', component:DashboardComponent },
            {path:'progress',component:ProgressComponent},
            {path:'graphicsone',component:GraphicOneComponent},
            {path:'', redirectTo:'/dashboard', pathMatch:'full'},
        ]
    },
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'**',component:NopageFoundComponent}
]

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash:true })