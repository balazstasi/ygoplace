export interface Card {
  id: string;
  userId: string;
  ygoProDeckId: number;
  name: string;
  marketPrice: number;
  price: number;
  cardType: string;
  saleDate: Date;
  pictureUrl: string;
}

export type CardType = 'monster' | 'spell' | 'trap';

export interface YgoProDeckCard {
  id: number;
  name: string;
  type: string;
  desc: string;
  atk: number;
  def: number;
  level: number;
  race: string;
  attribute: string;
  archetype: string;
  card_sets: Array<{
    set_name: string;
    set_code: string;
    set_rarity: string;
    set_rarity_code: string;
    set_price: string;
  }>;
  card_images: Array<{
    id: number;
    image_url: string;
    image_url_small: string;
  }>;
  card_prices: [
    {
      cardmarket_price: string;
      tcgplayer_price: string;
      ebay_price: string;
      amazon_price: string;
      coolstuffinc_price: string;
    }
  ];
}
