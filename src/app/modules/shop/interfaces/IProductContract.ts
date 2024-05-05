import { type IReviewContract } from './IReviewContract';

export interface IProductContract {
  id: number;
  product: string;
  price: number;
  currency: string;
  rating: number;
  favorite: boolean;
  description: string;
  similarProducts?: IProductContract[];
  reviews?: IReviewContract[] | null;
}
