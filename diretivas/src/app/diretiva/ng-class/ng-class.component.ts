import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {

  meuFavorito: boolean = false;

  checked: boolean = false

  onClick(){
    this.meuFavorito = !this.meuFavorito
  }

  onCheck(){
    this.checked = !this.checked
  }

}
