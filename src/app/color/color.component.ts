import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color',
  imports: [FormsModule, CommonModule],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css',
})
export class ColorComponent {
  color: string = ''; // Two-way data binding for color input
}
