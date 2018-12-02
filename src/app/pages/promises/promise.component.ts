import { Component } from "@angular/core";

@Component({
    selector:'app-promise',
    templateUrl:'./promise.component.html'
})

export class PromiseComponent {
    constructor(){
        this.contarTres().then((data)=>{
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
    }
    contarTres(){
        return new Promise((resolve, reject) => {
            let contador = 0
            let intervalo = setInterval( ()=>{
                contador = contador + 1
                console.log(contador)
                if(contador === 3){
                    resolve('OK!')
                    clearInterval(intervalo)
                }
            },1000)
        })
    }
}