import { connectDb } from './drizzle.helpers';

export const DrizzleAsyncProvider = 'drizzleProvider';

export const drizzleProvider = [
    {
        provide: DrizzleAsyncProvider,
        useFactory: async () => {
            const { db } = await connectDb();
            return db;
        },
        exports: [DrizzleAsyncProvider],
    },
];