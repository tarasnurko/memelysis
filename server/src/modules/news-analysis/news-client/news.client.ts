import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import { parse as parseHtml } from "node-html-parser"


const xmlParser = new XMLParser();

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
        const parsedData = xmlParser.parse(bbcFeedsData);

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

    // cringe-ahh function name
    static async getOneBbcNews(link: string): Promise<string> {
        const res = await axios.get(link);

        return NewsClient.parseOneBbcNews(res?.data)
    }

    static parseOneBbcNews(html: string): string {
        const htmlElement = parseHtml(html);
        const textBlocks = htmlElement.querySelectorAll('[data-component="text-block"]');

        return textBlocks.reduce((acc, textBlock) => `${acc} ${textBlock.text}`, '')
    }
}