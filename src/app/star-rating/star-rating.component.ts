import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css',
})
export class StarRatingComponent {
  @Input() rating: number = 0; // Accepts a rating between 0 to 5
  @Output() ratingChange = new EventEmitter<number>(); // Emits rating changes

  hoveredRating: number = 0; // For hover effect

  getStarArray() {
    const fullStars = Math.floor(this.rating);
    const halfStar = this.rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return {
      fullStars: Array(fullStars).fill(0),
      halfStar,
      emptyStars: Array(emptyStars).fill(0),
    };
  }

  setRating(starIndex: number) {
    this.rating = starIndex + 1;
    this.ratingChange.emit(this.rating);
  }

  setHoveredRating(starIndex: number) {
    this.hoveredRating = starIndex + 1;
  }

  resetHoveredRating() {
    this.hoveredRating = 0;
  }
}
