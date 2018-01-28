import { Injectable } from '@angular/core';//inyetar dependencias

@Injectable()
export class RopaService {

  public nombre_prenda = 'Pantalones vaqueros';
  public coleccion_ropa = ['Pantalones negros','Camisa a cuadros'];

  prueba(){
    return this.nombre_prenda;
  }
  addRopa(nombrePrenda){
    this.coleccion_ropa.push(nombrePrenda);
  }

}
