import { Component } from '@angular/core';

@Component({
  selector: 'app-ouput-property',
  templateUrl: './ouput-property.component.html',
  styleUrls: ['./ouput-property.component.css']
})
export class OuputPropertyComponent {

  valor: number = 0;


  incrementa(){
    this.valor++;
  }

  decrementa(){
    this.valor--;
  }

}
