import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appValidation]',
})
export class ValidationDirective {
  constructor(private el: ElementRef) {}
  //@Input() highlightColor: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hightLight('1px solid black');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.hightLight(null);
  }

  hightLight(color: string) {
    this.el.nativeElement.style.border = color;
  }
}
