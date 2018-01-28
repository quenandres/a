import {Component} from "@angular/core";

@Component({
	selector:'fruta',
	template:`
		<h2>{{nombre_componente}}</h2>
		<p>{{listado_frutas}}</p>
		
	`	
})
export class FrutaComponent{
	public nombre_componente='Componente de fruta';
	public listado_frutas='Manzana,Banano,Mandarina';
}