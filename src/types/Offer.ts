import { Card } from './Card';

export interface Offer {
  sellerId: string;
  buyerId: string;
  sellerCards: Card[];
  buyerCards: Card[];
  isActive: boolean;
  buyerMoney: number;
}
