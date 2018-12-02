import { Component, OnInit, Inject } from "@angular/core"
import { DOCUMENT } from '@angular/platform-browser' 

@Component({
    selector:'app-account-settings',
    templateUrl:'./account-settings.component.html'
})

export class AccountSettingsComponent implements OnInit{
    constructor(@Inject(DOCUMENT) private _document){}
    ngOnInit(){

    }
    
    cambiarColor(tema:string, link:any){
        let url = `assets/css/colors/${tema}.css`
        this._document.getElementById('theme').setAttribute('href', url)
        this.aplicarCheck(link)
    }
    
    aplicarCheck(link:any){
        let selectores:any = document.getElementsByClassName('selector')

        for(let elemento of selectores){
            elemento.classList.remove('working')
        }
        link.classList.add('working')
    }

}