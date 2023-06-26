import { Component, OnInit, OnChanges,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  OnDestroy,
  Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterViewInit,
AfterViewChecked,
AfterContentChecked,
OnDestroy
{


  @Input() valorInicial: number = 10;


  constructor(){
    this.log('construtor')
  }

  ngOnChanges(){
    this.log('ngOnChanges')
  }

  ngOnInit(): void {
    this.log('ngOnInit')
  }

  ngDoCheck(): void {
   this.log('doCheck')
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit')

  }

  ngAfterViewInit(): void {
 this.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked')
  }

  ngAfterContentChecked(): void {
   this.log('ngAfterContentCheck')
  }

  ngOnDestroy(): void {
   this.log('onDestroy')
  }

 private log(hook: string) {
  console.log(hook)
  }

}
