import { YgoProDeckCard } from '~/types/Card';

const API_URL = import.meta.env.VITE_YGO_PRO_DECK_API_URL;

/** Example response:
 * [
    {
        "id": 46986421,
        "name": "Dark Magician",
        "type": "Normal Monster",
        "desc": "''The ultimate wizard in terms of attack and defense.''",
        "atk": 2500,
        "def": 2100,
        "level": 7,
        "race": "Spellcaster",
        "attribute": "DARK",
        "archetype": "Dark Magician",
        "card_sets": [
            {
                "set_name": "Yugi's Legendary Decks",
                "set_code": "YGLD-ENB02",
                "set_rarity": "Ultra Rare",
                "set_rarity_code": "(UR)",
                "set_price": "0"
            },
            {
                "set_name": "Yugi's Legendary Decks",
                "set_code": "YGLD-ENC09",
                "set_rarity": "Ultra Rare",
                "set_rarity_code": "(UR)",
                "set_price": "0"
            }
        ],
        "card_images": [
            {
                "id": 46986421,
                "image_url": "https://storage.googleapis.com/ygoprodeck.com/pics/46986421.jpg",
                "image_url_small": "https://storage.googleapis.com/ygoprodeck.com/pics_small/46986421.jpg"
            },
            {
                "id": 46986420,
                "image_url": "https://storage.googleapis.com/ygoprodeck.com/pics/46986420.jpg",
                "image_url_small": "https://storage.googleapis.com/ygoprodeck.com/pics_small/46986420.jpg"
            },
        ],
        "card_prices": [
            {
                "cardmarket_price": "0.14",
                "tcgplayer_price": "0.54",
                "ebay_price": "5.95",
                "amazon_price": "12.00",
                "coolstuffinc_price": "0.49"
            }
        ]
    }
]
 */
export const getCardsByName = async (name: string): Promise<{ data: YgoProDeckCard[] }[]> => {
  const response = await fetch(`${API_URL}?name=${name}`).catch((error) => {
    console.error(error);
    return error;
  });

  return response.json();
};

export const getCardById = async (id: string): Promise<{ data: YgoProDeckCard[] }> => {
  const response = await fetch(`${API_URL}?id=${id}`).catch((error) => {
    console.error(error);
    return error;
  });
  return response.json();
};

export const getCardsByIds = async (ids: string[]): Promise<YgoProDeckCard[]> => {
  const response = await Promise.all(ids.map((id) => getCardById(id)));
  return response.map(({ data }) => data[0]);
};
