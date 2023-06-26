import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './ouput-property.component.html',
  styleUrls: ['./ouput-property.component.css'],
  // outputs: ['mudouValor']
})
export class OuputPropertyComponent {

  @Input() valorOutput: any = 0;

  @Output() mudouValor = new EventEmitter()


  incrementa(){
    this.valorOutput++;
    this.mudouValor.emit({novoValor: this.valorOutput})
  }

  decrementa(){
    this.valorOutput--;
    this.mudouValor.emit({novoValor: this.valorOutput})
  }

}
