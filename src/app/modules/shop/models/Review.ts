import { IReview } from '../interfaces/IReview';
import { IReviewContract } from '../interfaces/IReviewContract';

export class Review implements IReview {
  image: string;
  name: string;
  rating: number;
  opinion: string;
  date: Date;

  constructor(review: IReviewContract) {
    this.image = review.image;
    this.name = review.name;
    this.rating = review.rating;
    this.opinion = review.opinion;
    this.date = review.date;
  }
}
