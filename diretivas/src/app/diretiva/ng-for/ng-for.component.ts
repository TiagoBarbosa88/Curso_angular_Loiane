import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

  cursos: string[] = ['Angular', 'Java', 'Typescript']

  filmesFavoritos: string[] = ['Pear Harbor', "Harry Potter", "Senhor dos Aneis", "Hobbits"]
}
