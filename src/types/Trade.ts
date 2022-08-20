import { ReviewStar } from "./ReviewStar";

export interface Trade {
  buyerId: string;
  sellerId: string;
  offerId: string;
  isDone: boolean;
  star: ReviewStar[];
}
