import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
	selector:'empleado-tag',
	templateUrl:'empleado.component.html'
})
export class EmpleadoComponent{
	public nombre_empleado='Titulo de la pagina';
	
	public edad:number=23;


	public empleado:Empleado;//Se instancia el objeto Empleado en la variable empleado
	public trabajadores:Array<Empleado>;
	public trabajador_externo:boolean;
	public color:String;
	public color_seleccionado:string;

	constructor(){
			this.empleado = new Empleado("Andres",23,"Nada",true);
			this.trabajadores=[
				new Empleado('Jhonatan',23,"Programador",true),
				new Empleado('andres',33,"Analista",true),
				new Empleado('joban',13,"Jugador",true)
			];

			this.trabajador_externo = false;
			this.color='blue';
			this.color_seleccionado = '#ccc';
	}
	

	ngOnInit(){
		console.log(this.empleado);
		console.log(this.trabajadores);
	}

	cambiarExterno(valor){
		this.trabajador_externo=valor;
	}
	
	
	message(){
		alert("Mensaje");
	}
}