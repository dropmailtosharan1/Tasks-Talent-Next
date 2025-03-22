import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appReadonly]',
})
export class ReadonlyDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.readOnly = true;
  }
}
