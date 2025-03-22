import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { SortPipe } from '../sort.pipe';


@Component({
  selector: 'app-country-list',
  imports: [CommonModule, FormsModule, SortPipe],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css',
})
export class CountryListComponent {
  countries: string[] = [
    'India',
    'United States',
    'Canada',
    'Germany',
    'Australia',
  ];
  newCountry: string = '';
  sortOrder: string = 'asc'; // Default sorting order

  addCountry() {
    if (this.newCountry.trim()) {
      this.countries.push(this.newCountry.trim());
      this.newCountry = '';
    }
  }
}
