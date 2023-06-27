import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {

  cursos: string[] = ['Angular'];

  mostrarCursos: boolean = true



  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos
  }
}

