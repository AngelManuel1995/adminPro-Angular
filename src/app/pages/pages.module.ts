import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms'
import { ProgressComponent } from "./progress/progess.component";
import { GraphicOneComponent } from './graphicone/graphicone.component'
import { ComponentsModule } from '../components/components.module'
import { ChartsModule } from 'ng2-charts';


@NgModule({
    declarations:[
        ProgressComponent,
        GraphicOneComponent
    ],
    exports:[
        ProgressComponent,
        GraphicOneComponent
    ],
    imports:[
        FormsModule,
        ComponentsModule,
        ChartsModule
    ]
})
export class PagesModule{}