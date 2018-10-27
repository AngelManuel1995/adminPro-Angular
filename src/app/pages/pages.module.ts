import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms'
import { ProgressComponent } from "./progress/progess.component";


@NgModule({
    declarations:[
        ProgressComponent
    ],
    exports:[
        ProgressComponent
    ],
    imports:[
        FormsModule
    ]
})
export class PagesModule{}