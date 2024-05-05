import { type IReviewContract } from './IReviewContract';

export interface IProduct {
  id: number;
  product: string;
  price: number;
  currency: string;
  rating: number;
  favorite: boolean;
  description: string;
  similarProducts?: IProduct[];
  reviews?: IReviewContract[] | null;
}
