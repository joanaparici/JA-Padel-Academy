import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.scss'],
})
export class StarsRatingComponent {
  private _rating!: number;

  @Input()
  set rating(val: number) {
    this._rating = Math.min(Math.max(val, 0), 5);
  }

  get rating(): number {
    return this._rating;
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 > 0;
  }

  getStarList(rating: number): string[] {
    const fullStars = Math.trunc(rating);

    const stars = new Array(5).fill('bi-star');

    stars.fill('bi-star-fill', 0, fullStars);

    if (this.hasHalfStar(rating)) stars[fullStars] = 'bi-star-half';

    return stars;
  }

  getStarsColor(rating: number): string {
    const color = rating < 3 ? 'red' : rating < 4 ? 'orange' : 'green';
    return color;
  }

  changeRating(newRating: number): void {
    this.rating = newRating;
  }
}
