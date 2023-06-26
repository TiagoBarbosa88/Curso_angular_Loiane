import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './ouput-property.component.html',
  styleUrls: ['./ouput-property.component.css'],
  // outputs: ['mudouValor']
})
export class OuputPropertyComponent {

  @Input() valorOutput: any = 0;

  @Output() mudouValor = new EventEmitter()

  @ViewChild('campoInput')
  campoValorInput!: ElementRef;


  incrementa(){

    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valorOutput})
  }

  decrementa(){
    this.valorOutput--;
    this.mudouValor.emit({novoValor: this.valorOutput})
  }

}
