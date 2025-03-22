import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoWhitespace]',
})
export class NoWhitespaceDirective {
  constructor() {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === ' ') {
      event.preventDefault(); // Prevent typing space
    }
  }

  // constructor(private el: ElementRef) {}
  // @HostListener('input', ['$event'])
  // onInput(event: InputEvent) {
  //   const input = event.target as HTMLInputElement;
  //   input.value = input.value.replace(/\s/g, '');
  // }
}
