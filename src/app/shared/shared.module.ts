import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NopageFoundComponent } from "./nopagefound/nopagefound.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadCrumbsComponent } from "./breadcrumbs/breadcrumbs.component";

@NgModule({
    declarations:[
        NopageFoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadCrumbsComponent,
    ],
    exports:[
        NopageFoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadCrumbsComponent,
    ],
    imports:[
        RouterModule,
        CommonModule
    ]
})

export class SharedModule{

}