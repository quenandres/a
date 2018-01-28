import {Component} from '@angular/core';
import {RopaService} from '../services/ropa.service';

import {DeporteService} from '../services/deporte.service';

@Component({
    selector: 'home',
    templateUrl:'./home.component.html',
    providers:[RopaService,DeporteService]
})

export class HomeComponent{
    public titulo='Pagina Principal';

    public listado_ropa:Array<string>;
    public prenda_a_guardar:string;

    constructor(
        private _ropaservice:RopaService,
        private _deporteservice:DeporteService
    ){}

    ngOnInit(){
        this.listado_ropa=this._ropaservice.getRopa();
        console.log(this.listado_ropa);        
    }

    guardarPrenda(){
        this._ropaservice.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar='';
    }

    eliminaPrenda(index:number){
        console.log("prenda a eliminar "+index);
        this._ropaservice.deleteRopa(index);
    }
}