import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCartSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/products", async (_req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get("/api/products/:id", async (req, res) => {
    const product = await storage.getProduct(parseInt(req.params.id));
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.json(product);
  });

  app.get("/api/cart", async (_req, res) => {
    const cart = await storage.getCart();
    res.json(cart);
  });

  app.post("/api/cart", async (req, res) => {
    try {
      const cartItem = insertCartSchema.parse(req.body);
      const result = await storage.addToCart(cartItem);
      res.json(result);
    } catch (error) {
      res.status(400).json({ message: "Invalid cart item data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
