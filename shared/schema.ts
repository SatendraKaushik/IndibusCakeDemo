import { pgTable, text, serial, integer, numeric, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: numeric("price").notNull(),
  category: text("category").notNull(),
  image: text("image").notNull(),
  ingredients: text("ingredients").notNull(),
  servingSize: text("serving_size").notNull(),
  packaging: text("packaging").notNull(),
});

export const cart = pgTable("cart", {
  id: serial("id").primaryKey(),
  productId: integer("product_id").notNull(),
  quantity: integer("quantity").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertProductSchema = createInsertSchema(products).pick({
  name: true,
  description: true,
  price: true,
  category: true,
  image: true,
  ingredients: true,
  servingSize: true,
  packaging: true,
});

export const insertCartSchema = createInsertSchema(cart).pick({
  productId: true,
  quantity: true,
});

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Cart = typeof cart.$inferSelect;
export type InsertCart = z.infer<typeof insertCartSchema>;

export const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Royal Dark Chocolate Truffle Cake",
    description: "A decadent dark chocolate cake layered with premium truffle cream and adorned with 24K gold leaf",
    price: "89.99",
    category: "Signature Cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    ingredients: "Belgian Dark Chocolate, Tahitian Vanilla, 24K Gold Leaf",
    servingSize: "Serves 8-10 | Perfect with Champagne",
    packaging: "Handcrafted Black Box with Gold Embossing"
  },
  {
    id: 2,
    name: "Opulent Opera Gâteau",
    description: "Layers of almond sponge cake soaked in coffee syrup, with dark chocolate ganache and gold-dusted coffee buttercream",
    price: "75.99",
    category: "Signature Cakes",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    ingredients: "Almond Flour, Valrhona Chocolate, Italian Coffee, Gold Dust",
    servingSize: "Serves 6-8 | Pairs with Espresso",
    packaging: "Art Deco-inspired Gift Box"
  },
  {
    id: 3,
    name: "Golden Phoenix Macarons",
    description: "Delicate French macarons with exotic flavors, finished with edible gold and silver leaf",
    price: "45.99",
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43",
    ingredients: "French Almond Flour, Premium Pistachios, Rose Water, Edible Metals",
    servingSize: "12 pieces | Perfect for Gifting",
    packaging: "Signature Purple Box with Ribbon"
  },
  {
    id: 4,
    name: "Midnight Velvet Dream",
    description: "Ultra-rich chocolate cake with midnight-black cocoa and shimmer dust finish",
    price: "95.99",
    category: "Signature Cakes",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62",
    ingredients: "Black Cocoa, Madagascar Vanilla, Dark Chocolate Pearls",
    servingSize: "Serves 10-12 | Special Occasions",
    packaging: "Black Velvet Box with LED Lighting"
  },
  {
    id: 5,
    name: "Crystal Berry Tart",
    description: "Fresh seasonal berries glazed with champagne jelly on vanilla bean custard",
    price: "65.99",
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1488477304112-4944851de03d",
    ingredients: "Wild Berries, Tahitian Vanilla, Champagne Gelée",
    servingSize: "Serves 6-8 | Best Fresh",
    packaging: "Clear Acrylic Box with Gold Trim"
  },
  {
    id: 6,
    name: "Gilded Pistachio Dream",
    description: "Layers of pistachio cake with rosewater cream and golden sugar crystals",
    price: "85.99",
    category: "Signature Cakes",
    image: "https://images.unsplash.com/photo-1464195244916-405fa0a82545",
    ingredients: "Iranian Pistachios, Damascus Rose Water, Gold Sugar",
    servingSize: "Serves 8-10 | Afternoon Tea",
    packaging: "Emerald Green Box with Gold Details"
  }
];