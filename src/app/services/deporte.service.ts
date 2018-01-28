import {Injectable} from '@angular/core';

@Injectable()
export class DeporteService{
    public nombre_deporte = 'soccer';
    private nombre_deporte2 = 'soffball';

    deporte(){
        return this.nombre_deporte;
    }    
    deporte_privado(){
        return this.nombre_deporte2;
    }

}