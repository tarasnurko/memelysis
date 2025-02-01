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
    url: process.env.DATABASE_URL!
  },
} satisfies Config;