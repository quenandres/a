import { Injectable } from '@angular/core';//inyetar dependencias

@Injectable()
export class RopaService {

  public nombre_prenda = 'Pantalones vaqueros';
  public coleccion_ropa = ['Pantalones negros','Camisa a cuadros'];

  prueba(){
    return this.nombre_prenda;
  }

  addRopa(nombrePrenda:string){
    this.coleccion_ropa.push(nombrePrenda);
    this.getRopa();
  }

  getRopa(){
    return this.coleccion_ropa;
  }

  deleteRopa(index:number){
    this.coleccion_ropa.splice(index,1);
    return this.getRopa();
  }

}
