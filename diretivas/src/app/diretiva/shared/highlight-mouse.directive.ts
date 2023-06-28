import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') onMouseOver() {
    //this._renderer.setStyle(this._elementRef.nativeElement,'backgroundColor', 'yellow')
    this.backgroundColor = 'yellow'
  }

  @HostListener('mouseleave') onMouseLeave() {
    //this._renderer.setStyle(this._elementRef.nativeElement,'backgroundColor', 'white')
    this.backgroundColor = 'white'
  }

  //@HostBinding('style.backgroundColor') backgroundColor?: string;
  @HostBinding('style.backgroundColor') get setColor(){

    return this.backgroundColor;
  }

  private backgroundColor?: string

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}
}