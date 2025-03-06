import { create } from 'zustand';
import { Product } from '@shared/schema';

interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

export const useStore = create<StoreState>((set): StoreState => ({
  cart: [],
  addToCart: (product: Product) =>
    set((state: StoreState) => {
      const existingItem = state.cart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { product, quantity: 1 }] };
    }),
  removeFromCart: (productId: number) =>
    set((state: StoreState) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    })),
  updateQuantity: (productId: number, quantity: number) =>
    set((state: StoreState) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
    })),
}));