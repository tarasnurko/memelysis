import { Module } from '@nestjs/common';
import { DrizzleService } from './drizzle.service';
import { drizzleProvider } from './drizzle.provider';

@Module({
    providers: [...drizzleProvider, DrizzleService],
    exports: [DrizzleService],
})
export class DrizzleModule { }