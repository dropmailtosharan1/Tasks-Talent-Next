import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]',
})
export class NumbersOnlyDirective {
  constructor() {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow only numbers, backspace, delete, arrows, and tab
    if (
      !/[0-9]/.test(event.key) &&
      !['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'].includes(
        event.key
      )
    ) {
      event.preventDefault();
    }
  }
}
