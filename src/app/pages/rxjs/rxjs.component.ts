import { Component } from "@angular/core" 
import { Observable, Subscriber } from "rxjs/Rx";
import { retry } from "rxjs/operators";

@Component({
    selector:'app-rxjs',
    templateUrl:'./rxjs.component.html'
})

export class RxjsComponent{
    constructor(){
        // this.retornaObservable().pipe(retry(2)).subscribe( 
        // ( data ) => console.log( data ) , 
        // ( err ) => console.log( err ) , 
        // ( ) => console.log('Completado'))

        this.retornaObservable().subscribe( 
            ( data ) => console.log( 'sub' , data ) , 
            ( err ) => console.log( err ) , 
            ( ) => console.log('Completado'))
    }

    retornaObservable():Observable<number>{

        return new Observable( (observer:Subscriber<number>) => {
            let contador = 0;
            let intervalo = setInterval( () =>{
                contador++
                observer.next( contador )
                if( contador === 3 ){
                    clearInterval( intervalo )
                    observer.complete()
                }

                // if( contador === 2 ){
                //     //clearInterval( intervalo )
                //     observer.error('Ups!!!')
                // }
                
            },1000)
        })
    }
}