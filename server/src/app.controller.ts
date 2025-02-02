import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { DrizzleService } from './modules/drizzle/drizzle.service';

import { eq } from 'drizzle-orm';

interface ClusterData {
  id: string;
  text: string;
  score: number;
}

@Controller()
export class AppController {
  constructor(private readonly drizzle: DrizzleService, private readonly appService: AppService) { }

  @Get()
  health(): string {
    return this.appService.health();
  }

  @Get('clusters')
  async getClusters(): Promise<ClusterData[]> {
    const clusters = await this.drizzle.db.select().from(this.drizzle.schema.contentEmbeddingsTable);

    const res: ClusterData[] = [];

    for (const cluster of clusters) {
      const clusterMedianValues = await this.appService.getClusterMedianValues(cluster.id);
      const score = this.appService.getClusterMedianScore(clusterMedianValues);

      res.push({
        id: cluster.id,
        text: cluster.text,
        score: score
      })
    }

    return res;
  }

  @Get('clusters/:id')
  async getClustedById(@Param('id') id: string) {
    const cluster = await this.drizzle.db.select().from(this.drizzle.schema.contentEmbeddingsTable).where(eq(this.drizzle.schema.contentEmbeddingsTable.id, id));
    const clusterMedianValues = await this.appService.getClusterMedianValues(id);
    const score = this.appService.getClusterMedianScore(clusterMedianValues);

    const clusterNews = await this.appService.getTransformedClusterNews(id);
    const clusterTokens = await this.appService.getClusterTokens(id);

    return {
      id: cluster[0].id,
      text: cluster[0].text,
      medianValues: clusterMedianValues,
      score: score,
      news: clusterNews,
      tokens: clusterTokens
    }
  }

}
