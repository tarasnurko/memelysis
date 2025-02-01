import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import 'dotenv/config';

import * as schema from './drizzle.schema';

// https://github.com/drizzle-team/drizzle-orm/discussions/1914#discussioncomment-9600199
export function enumToPgEnum<T extends Record<string, any>>(
    myEnum: T,
): [T[keyof T], ...T[keyof T][]] {
    return Object.values(myEnum).map((value: any) => `${value}`) as any
}

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