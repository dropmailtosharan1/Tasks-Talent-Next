import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-converter',
  imports: [FormsModule,CommonModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css'
})
export class CurrencyConverterComponent {

  usdAmount: number = 1; // Default amount set to 1 USD
  convertedValues = {
    INR: 0,
    EUR: 0,
    JPY: 0
  };

  conversionRates = {
    INR: 82.0,  // 1 USD = 82 INR
    EUR: 0.90,  // 1 USD = 0.90 EUR
    JPY: 145.5  // 1 USD = 145.5 JPY
  };

  constructor() {
    this.convertCurrency(); // Initial conversion with default value
  }

  convertCurrency() {
    this.convertedValues.INR = this.usdAmount * this.conversionRates.INR;
    this.convertedValues.EUR = this.usdAmount * this.conversionRates.EUR;
    this.convertedValues.JPY = this.usdAmount * this.conversionRates.JPY;
  }
}
