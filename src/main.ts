import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ColorComponent } from './app/color/color.component';
import { StarRatingComponent } from './app/star-rating/star-rating.component';
import { FontComponent } from './app/font/font.component';
import { CountryListComponent } from './app/pipe/country-list/country-list.component';
import { DirectiveDemoComponent } from './app/directive/directive-demo/directive-demo.component';
import { LoginComponent } from './app/login/login.component';
import { CurrencyConverterComponent } from './app/currency-converter/currency-converter.component';

@Component({
  selector: 'app-root',
  imports: [
    ColorComponent,
    StarRatingComponent,
    FontComponent,
    CountryListComponent,
    DirectiveDemoComponent,
    LoginComponent,
    CurrencyConverterComponent,
  ],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <hr>
    <app-login></app-login>
    <hr>
  <app-currency-converter></app-currency-converter>
  <hr>
    <app-directive-demo></app-directive-demo>
    <hr>
    <app-country-list></app-country-list>
    <hr>
    <app-font></app-font>
    <hr>
    <app-star-rating [(rating)]="selectedRating"></app-star-rating>
<p>User selected rating: {{ selectedRating }}/5</p>
<hr>
    <app-color></app-color>
  `,
})
export class App {
  name = 'Angular';
  selectedRating = 3; // Default rating
}

bootstrapApplication(App);
