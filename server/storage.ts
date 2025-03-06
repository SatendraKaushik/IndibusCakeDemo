import { sampleProducts, type Product, type Cart, type InsertCart } from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  getCart(): Promise<Cart[]>;
  addToCart(cart: InsertCart): Promise<Cart>;
}

export class MemStorage implements IStorage {
  private products: Product[];
  private cart: Cart[];
  private cartId: number;

  constructor() {
    this.products = sampleProducts;
    this.cart = [];
    this.cartId = 1;
  }

  async getProducts(): Promise<Product[]> {
    return this.products;
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.find((p) => p.id === id);
  }

  async getCart(): Promise<Cart[]> {
    return this.cart;
  }

  async addToCart(cartItem: InsertCart): Promise<Cart> {
    const newCart: Cart = {
      id: this.cartId++,
      ...cartItem,
      createdAt: new Date(),
    };
    this.cart.push(newCart);
    return newCart;
  }
}

export const storage = new MemStorage();
