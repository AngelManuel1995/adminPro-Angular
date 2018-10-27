import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector:'app-incrementador',
    templateUrl:'./incrementador.component.html'
})

export class IncrementadorComponent{
    
    @Input() progreso:number = 5
    @Input() leyenda:string = ""
    @Output() cambiarValorEvent: EventEmitter<number> = new EventEmitter()
    @ViewChild('txtProgreso') txtProgreso: ElementRef

    constructor(){

    }
    
    cambiarValor(valor:number){
        
        this.progreso = this.progreso + valor
        if(this.progreso > 100){
            this.progreso = 100
        }
        if(this.progreso < 0){
            this.progreso = 0
        }
        
        this.cambiarValorEvent.emit(this.progreso)
    }

    onChanges(event){
        this.cambiarValorEvent.emit(event)

        /** Validar el progreso que entra */

        this.txtProgreso.nativeElement.value = event;
    }

}