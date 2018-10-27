import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms'
import { ChartsModule } from 'ng2-charts';
import { IncrementadorComponent } from './incrementador/incrementador.component'
import { GraphicComponent } from './graphic/graphic.component'

@NgModule({
    declarations:[
        IncrementadorComponent,
        GraphicComponent
    ],
    exports:[
        IncrementadorComponent,
        GraphicComponent
    ],
    imports:[
        FormsModule,
        ChartsModule
    ]
})

export class ComponentsModule{}