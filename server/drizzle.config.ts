import type {
  Config
} from 'drizzle-kit';
import 'dotenv/config';

export default {
  schema: './src/modules/drizzle/drizzle.schema.ts',
  out: './migration',
  dialect: "postgresql",
  casing: 'snake_case',
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_URL!
  },
} satisfies Config;