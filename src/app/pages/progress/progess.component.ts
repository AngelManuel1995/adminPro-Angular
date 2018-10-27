import { Component, OnInit } from '@angular/core'

@Component({
    selector:'app-progress',
    templateUrl:'./progess.component.html'
})

export class ProgressComponent implements OnInit{
    
    progreso:number = 5

    constructor(){

    }

    ngOnInit(){

    }

    cambiarValor(valor:number){
        
        this.progreso = this.progreso + valor
        if(this.progreso > 100){
            this.progreso = 100
        }
        if(this.progreso < 0){
            this.progreso = 0
        }
    }
}