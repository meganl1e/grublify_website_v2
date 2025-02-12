import { type Waitlist, type InsertWaitlist } from "@shared/schema";

export interface IStorage {
  createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist>;
}

export class MemStorage implements IStorage {
  private waitlist: Map<number, Waitlist>;
  private currentId: number;

  constructor() {
    this.waitlist = new Map();
    this.currentId = 1;
  }

  async createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist> {
    const id = this.currentId++;
    const waitlistEntry = { ...entry, id };
    this.waitlist.set(id, waitlistEntry);
    return waitlistEntry;
  }
}

export const storage = new MemStorage();
