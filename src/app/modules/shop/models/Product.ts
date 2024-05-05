import { IProduct } from '../interfaces/IProduct';
import { IProductContract } from '../interfaces/IProductContract';
import { IReviewContract } from '../interfaces/IReviewContract';

export class Product implements IProduct {
  id: number;
  product: string;
  price: number;
  currency: string;
  rating: number;
  favorite: boolean;
  description: string;
  similarProducts?: Product[];
  reviews?: IReviewContract[] | null;

  constructor(product: IProductContract) {
    this.id = product.id;
    this.product = product.product;
    this.price = product.price;
    this.currency = product.currency;
    this.rating = product.rating;
    this.favorite = product.favorite;
    this.description = product.description;
    this.similarProducts = product.similarProducts;
    this.reviews = product.reviews;
  }
}
