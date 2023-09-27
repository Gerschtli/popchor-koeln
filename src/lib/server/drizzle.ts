import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import * as schema from '$lib/server/schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const postgresClient = global.postgresClientCached || postgres(env.DATABASE_URL);

if (dev) {
    global.postgresClientCached = postgresClient;
}

export const db = drizzle(postgresClient, { schema });
