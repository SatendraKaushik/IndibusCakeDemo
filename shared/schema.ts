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
    description: "A decadent dark chocolate cake layered with premium truffle cream",
    price: "89.99",
    category: "Signature Cakes",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d",
    ingredients: "Belgian Dark Chocolate, Tahitian Vanilla, 24K Gold Leaf",
    servingSize: "Serves 8-10 | Perfect with Champagne",
    packaging: "Handcrafted Black Box with Gold Embossing"
  },
  // Add more sample products here using the provided stock photos
];
