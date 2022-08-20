import create from 'zustand';
import { Card, User } from '~/types';
import { YgoProDeckCard } from '~/types/Card';

export type YgoStore = {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  user: User | null;
  cards: Card[];
  users: User[];
  selectedUser: User | null;
  selectedCards: Card[];
  setSelectedCards: (selectedCards: YgoProDeckCard[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsError: (isError: boolean) => void;
  setErrorMessage: (errorMessage: string) => void;
  setCards: (cards: Card[]) => void;
  setUsers: (users: User[]) => void;
  setSelectedUser: (selectedUser: User) => void;
};

const useYuGiStore = create<YgoStore>((set, get) => ({
  isLoading: false,
  isError: false,
  errorMessage: '',
  isLoggedIn: false,
  user: null,
  cards: [],
  setCards: (cards: Card[]) => set((state) => ({ ...state, cards })),
  users: [],
  setUsers: (users: User[]) => set((state) => ({ ...state, users })),
  selectedUser: null,
  selectedCards: [],
  setSelectedCards: (selectedCards: YgoProDeckCard[]) => {
    const convertToCard = (card: YgoProDeckCard) => ({
      id: '',
      userId: '',
      ygoProDeckId: card.id,
      name: card.name,
      marketPrice: +card.card_prices[0].cardmarket_price,
      price: 0,
      cardType: card.type,
      saleDate: new Date(),
      pictureUrl: card.card_images[0].image_url,
    });
    set({ selectedCards: selectedCards.map(convertToCard) });
  },
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setIsError: (isError: boolean) => set({ isError }),
  setErrorMessage: (errorMessage: string) => set({ errorMessage }),
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  setUser: (user: User) => set({ user }),
  setWantList: (wantList: Card['id'][]) => set((state: YgoStore) => ({ ...state, user: { ...state.user, wantList } })),
  setOwnedList: (ownedList: Card['id'][]) =>
    set((state: YgoStore) => ({ ...state, user: { ...state.user, ownedList } })),
  setSelectedUser: (selectedUser: User) => set({ selectedUser }),
}));

export default useYuGiStore;
