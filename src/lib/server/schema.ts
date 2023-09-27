import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const guestbookEntries = pgTable('guestbook_entries', {
    id: serial('id').primaryKey(),
    message: text('message').notNull(),
    timestamp: timestamp('timestamp', { mode: 'date' }).notNull().defaultNow(),
});
