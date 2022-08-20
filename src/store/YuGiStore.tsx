import create from 'zustand';
import { Card, User } from '~/types';

type YugiState = {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  user: User | null;
  cards: Card[];
  users: User[];
  selectedUser: User;
  selectedCard: Card;
  setIsLoading: (isLoading: boolean) => void;
  setIsError: (isError: boolean) => void;
  setErrorMessage: (errorMessage: string) => void;
  setCards: (cards: Card[]) => void;
  setUsers: (users: User[]) => void;
  setSelectedUser: (selectedUser: User) => void;
  setSelectedCard: (selectedCard: Card) => void;
};

const useYuGiStore = create((set, get) => ({
  // state
  isLoading: false,
  isError: false,
  errorMessage: '',
  isLoggedIn: false,
  user: {},
  cards: [],
  users: [],
  selectedUser: {},
  selectedCard: {},
  // actions
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setIsError: (isError: boolean) => set({ isError }),
  setErrorMessage: (errorMessage: string) => set({ errorMessage }),
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  setUser: (user: User) => set({ user }),
  setWantList: (wantList: Card['id'][]) => set((state: YugiState) => ({ ...state, user: { ...state.user, wantList } })),
  setOwnedList: (ownedList: Card['id'][]) =>
    set((state: YugiState) => ({ ...state, user: { ...state.user, ownedList } })),
  setSelectedUser: (selectedUser: User) => set({ selectedUser }),
  setSelectedCard: (selectedCard: Card) => set({ selectedCard }),
}));

export default useYuGiStore;
