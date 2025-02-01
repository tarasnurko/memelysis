import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import 'dotenv/config';

import * as schema from './drizzle.schema';

export const connectDb = async () => {
    const client = new Client({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT!),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    });
    await client.connect();
    const db = drizzle(client, { schema, casing: 'snake_case', });
    return { db, client };
};