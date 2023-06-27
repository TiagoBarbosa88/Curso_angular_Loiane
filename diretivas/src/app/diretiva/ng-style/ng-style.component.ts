import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {

  ativo: boolean = false
  ativarStyle: boolean =false
  tamanhoFonte: number = 16

  mudarAtivo(){
    this.ativo = !this.ativo
  }

}
