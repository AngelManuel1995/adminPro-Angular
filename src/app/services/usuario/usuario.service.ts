import { Injectable } from "@angular/core";
import { Usuario } from "../../models/usuario.model";
import { HttpClient } from '@angular/common/http'
import { URL_SERVICIOS } from "../../config/config";
import { map } from 'rxjs/operators'
@Injectable()

export class UsuariosService{
    constructor( private _httpClient:HttpClient ){
    }

    crearUsuario( usuario: Usuario ){
        let url = URL_SERVICIOS + '/usuario'
        return this._httpClient.post( url, usuario ).pipe( map ((data) => {
            console.log(data)
        }))
    }

}