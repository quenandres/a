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

    constructor(
        private _ropaservice:RopaService,
        private _deporteservice:DeporteService
    ){}

    ngOnInit(){
        console.log(this._ropaservice.prueba());
        console.log("No Privado "+this._deporteservice.deporte());
        console.log("Privado "+this._deporteservice.deporte_privado());
    }
}