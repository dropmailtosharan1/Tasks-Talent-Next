import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-font',
  imports: [CommonModule],
  templateUrl: './font.component.html',
  styleUrl: './font.component.css',
})
export class FontComponent {
  fontSize: number = 16; // Default font size

  increaseFontSize() {
    this.fontSize += 2; // Increase font size by 2px
  }

  decreaseFontSize() {
    if (this.fontSize > 8) this.fontSize -= 2; // Decrease font size by 2px, with a minimum limit
  }
}
