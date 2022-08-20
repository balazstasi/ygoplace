import { ReviewStar } from './ReviewStar';
import { Card } from './Card';
import { Offer } from './Offer';
import { Trade } from './Trade';
import { User as FirebaseUser } from 'firebase/auth';

export interface User {
  id: string;
  name: string;
  user: FirebaseUser;
  cardsForSale: Card['id'][];
  offers: Offer[];
  numOfSales: number;
  comments: Comment[];
  reviews: ReviewStar[];
  trades: Trade[];
  picture: Blob;
  description: string;
  wantList: Card['id'][];
}
