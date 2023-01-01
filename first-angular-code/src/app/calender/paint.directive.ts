import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPaint]'
})
export class PaintDirective {

  constructor(private elementref: ElementRef) { }

  @Input()
  color: string = "red";

  @HostListener('mouseover') onMouseOver() {
    this.elementref.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseout') onMouseOut() {
    this.elementref.nativeElement.style.backgroundColor = 'white';
  }
}
