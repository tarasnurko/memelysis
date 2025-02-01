import { Inject, Injectable } from '@nestjs/common';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

import * as schema from './drizzle.schema';
import { DrizzleAsyncProvider } from './drizzle.provider';


@Injectable()
export class DrizzleService {
    public readonly schema = schema;

    constructor(
        @Inject(DrizzleAsyncProvider)
        readonly db: PostgresJsDatabase<typeof schema>,
    ) { }

    // async exists<T extends TableNames>(table: T, entityId: number) {
    //     // return Boolean(
    //     //   await this.db.query[table].findFirst({
    //     //     where: (table, { eq }) => eq((table as any).id, entityId),
    //     //   }),
    //     // );
    // }

    // async validateEntitiesExist(entities: DrizzleServiceValidateEntitiesExist) {
    //     // for (const { table, entityId } of entities) {
    //     //   const exist = await this.exists(table, entityId);
    //     //   if (!exist) {
    //     //     throw new HttpException(
    //     //       `Table ${capitalize(table)} doesn't have entity with id ${entityId}`,
    //     //       HttpStatus.UNPROCESSABLE_ENTITY,
    //     //     );
    //     //   }
    //     // }
    // }
}