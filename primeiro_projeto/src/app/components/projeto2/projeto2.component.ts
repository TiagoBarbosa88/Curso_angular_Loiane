import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto2',
  templateUrl: './projeto2.component.html',
  styleUrls: ['./projeto2.component.css']
})
export class Projeto2Component implements OnInit{

  url: string = 'https://loiane.com'
  cursoAngular: boolean = true

  urlImagem: string = "http://lorempixel.com.br/500/400/?1";

  


  getValor(){
    return 1
  }

  getCurtirCurso(){
   return true
  }

  ngOnInit() {

  }

}
