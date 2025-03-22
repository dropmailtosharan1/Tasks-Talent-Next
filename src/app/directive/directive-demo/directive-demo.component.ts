import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReadonlyDirective } from '../readonly.directive';
import { NoWhitespaceDirective } from '../no-whitespace.directive';
import { NumbersOnlyDirective } from '../numbers-only.directive';

@Component({
  selector: 'app-directive-demo',
  imports: [
    FormsModule,
    ReadonlyDirective,
    NoWhitespaceDirective,
    NumbersOnlyDirective,
  ],
  templateUrl: './directive-demo.component.html',
  styleUrl: './directive-demo.component.css',
})
export class DirectiveDemoComponent {}
