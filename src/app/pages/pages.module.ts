import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ProgressComponent } from "./progress/progess.component";
import { GraphicOneComponent } from './graphicone/graphicone.component'
import { AccountSettingsComponent } from './account-settings/account-settings.component'
import { ComponentsModule } from '../components/components.module'
import { DashboardComponent } from "./dashboard/dashboars.component";
import { PagesComponent } from "./pages.component";
import { SharedModule } from '../shared/shared.module'
import { PromiseComponent } from "./promises/promise.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { ServiceModule } from "../services/service.module";


@NgModule({
    declarations:[
        ProgressComponent,
        GraphicOneComponent,
        AccountSettingsComponent,
        DashboardComponent,
        PagesComponent, 
        PromiseComponent,
        RxjsComponent,
    ],
    exports:[
        ProgressComponent,
        GraphicOneComponent,
        AccountSettingsComponent,
        DashboardComponent,
        PagesComponent, 
        PromiseComponent,
        RxjsComponent
    ],
    imports:[
        FormsModule,
        ComponentsModule,
        SharedModule,
        RouterModule,
        ServiceModule
    ]
})
export class PagesModule{}