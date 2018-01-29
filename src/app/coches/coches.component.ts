import { Component } from '@angular/core';
import { Coche } from './coche';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent {
  public coche:Coche;
  
  constructor(){
    this.coche = new Coche("","","");
  }

  onSubmit(){
    console.log(this.coche);
    
  }
}
