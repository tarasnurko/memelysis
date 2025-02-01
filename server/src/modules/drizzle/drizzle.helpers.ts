import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import 'dotenv/config';

import * as schema from './drizzle.schema';
import { AnyPgColumn } from 'drizzle-orm/pg-core';
import { sql, SQL } from 'drizzle-orm';

// https://github.com/drizzle-team/drizzle-orm/discussions/1914#discussioncomment-9600199
export function enumToPgEnum<T extends Record<string, any>>(
    myEnum: T,
): [T[keyof T], ...T[keyof T][]] {
    return Object.values(myEnum).map((value: any) => `${value}`) as any
}

export const connectDb = async () => {
    const client = new Client({
        // connectionString: process.env.DATABASE_URL
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        // host: process.env.DATABASE_HOST,
    });
    await client.connect();
    const db = drizzle(client, { schema, casing: 'snake_case', });
    return { db, client };
};

export function lower(column: AnyPgColumn): SQL {
    return sql`lower(${column})`;
}