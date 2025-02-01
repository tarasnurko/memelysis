import axios from "axios";
import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser();

const bbcFeedsUrl = "https://feeds.bbci.co.uk/news/technology/rss.xml";

export interface BBCFeed {
    title: string;
    description: string;
    link: string;
    guid: string;
    pubDate: string;
    "media:thumbnail": string;
}

export class NewsClient {
    static async fetchBbcFeeds(): Promise<string> {
        const res = await axios.get(bbcFeedsUrl);
        return res.data;
    }

    static parseBbcFeeds(bbcFeedsData: string): BBCFeed[] {
        const parsedData = parser.parse(bbcFeedsData);

        return parsedData?.rss?.channel?.item;
    }

    static async getBbcFeeds(): Promise<BBCFeed[]> {
        const bbcFeedsXml = await NewsClient.fetchBbcFeeds();

        return NewsClient.parseBbcFeeds(bbcFeedsXml);
    }

    static async get10LatestBbcFeeds(): Promise<BBCFeed[]> {
        const news = await NewsClient.getBbcFeeds();

        return news.slice(0, 10);
    }
}