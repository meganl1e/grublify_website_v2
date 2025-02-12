import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";

export function registerRoutes(app: Express) {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = insertWaitlistSchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(data);
      res.json(entry);
    } catch (error) {
      res.status(400).json({ error: "Invalid data" });
    }
  });

  return createServer(app);
}
