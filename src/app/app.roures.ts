import { Routes, RouterModule } from '@angular/router'

import { DashboardComponent } from './pages/dashboard/dashboars.component'
import { LoginComponent } from './login/login.component'
import { ProgressComponent } from './pages/progress/progess.component'
import { GraphicOneComponent } from './pages/graphicone/graphicone.component'
import { NopageFoundComponent } from './shared/nopagefound/nopagefound.component'

const appRoutes:Routes = [
    {path:'dashboard', component:DashboardComponent },
    {path:'login',component:LoginComponent},
    {path:'register',component:LoginComponent},
    {path:'progress',component:ProgressComponent},
    {path:'graphicsone',component:GraphicOneComponent},
    {path:'', redirectTo:'/dashboard', pathMatch:'full'},
    {path:'**',component:NopageFoundComponent}
]

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash:true })