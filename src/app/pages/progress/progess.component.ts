import { Component, OnInit } from '@angular/core'

@Component({
    selector:'app-progress',
    templateUrl:'./progess.component.html'
})

export class ProgressComponent implements OnInit{
    
    azul:string = "Incrementador azul"
    verde:string = "Incrementador verde"
    progreso1:any = 10
    progreso2:any = 20

    constructor(){

    }

    ngOnInit(){

    }
}