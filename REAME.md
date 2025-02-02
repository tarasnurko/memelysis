# **Memelysis: AI-Powered Crypto Meme News Analysis**  

## **Overview**  

Memelysis analyzes news articles and determines their potential impact on cryptocurrency meme tokens. The platform ingests news, evaluates its relevance to crypto trends, and assigns a score based on its meme potential. If a news event has strong meme characteristics, it generates token names and symbols that reflect the news narrative.  

## **How It Works**  

1. **News Parsing**  
   - Fetches news articles, extracts the title, description, and full content.  

2. **Embedding Generation and Topic Clustering**  
   - Converts news content (title + desciption) into vector embeddings.  
   - Finds similar existing topics or creates a new topic if none exist.

3. **News Analysis**  
   - Evaluates news using predefined criteria:  
     - **Trending status** (current and future potential).  
     - **Celebrity and company involvement.**  
     - **Regulatory and historical impact.**  
     - **Crypto adoption and hype factor.**  
     - **Overall meme potential.**  
     - other...
   - Assigns a numeric score from **0 to 100**, where 100 indicates the strongest meme token opportunity.  

4. **Token Generation**  
   - If news has meme potential, generates **up to 10 token metadatas (name and symbol)**.  

5. **Data Storage and Retrieval**  
   - Saves parsed news, embeddings, and analyses.  
   - Groups similar news into one cluster

### A little bit of details (main part)

Imagine you heve few data providers (news, some twitter account, telegram chanel). You are retrieving information from them. You can analyze every data as separate entity... But what if multiple sources writing about same event? What's next, would you give user analysis of every content separately? You would just сonfuse the user even more. Instead Memelysis combines articles by clusters by using embedding. [Embeddings are representations of values or objects like text, images, and audio that are designed to be consumed by machine learning models and semantic search algorithms](https://www.cloudflare.com/en-gb/learning/ai/what-are-embeddings/). For news articles in our case embedding is title and description, it's because creating embedding can be time-consuming in case if article has large content, and tile and description would be enough to retrieve main idea of article. Then we process each article for some specific question like:

- **Current Trending Status** (How much is this news trending globally?)
- **Celebrity Involvement** (Does this news involve a famous individual who influences crypto or meme culture?)
- **Company Involvement** (Does this involve a company, and if so, how influential is the company?)
- **Hype Factor** (Does this news generate strong excitement, controversy, or viral social media reactions?)
- and other questions

For each question we have [weights](https://github.com/tarasnurko/memelysis/blob/8d42d308ea6f6568e8d70aca4a5d5aa9f3fc0168/server/src/analysis.ts#L5-L15) which in sum are 1 (100%). Each queston have predefined answer which by itself have score. For example for Celebrity Involvement [answers](https://github.com/tarasnurko/memelysis/blob/8d42d308ea6f6568e8d70aca4a5d5aa9f3fc0168/server/src/modules/drizzle/drizzle.types.ts#L9-L73) can be as follows:
    - No
    - Indirectly
    - Yes

and their [scores](https://github.com/tarasnurko/memelysis/blob/8d42d308ea6f6568e8d70aca4a5d5aa9f3fc0168/server/src/analysis.ts#L17-L81) in order:
    - 0
    - 30
    - 100

Then separate prompt retrieves suggested crypto token metadatas (if content have any slightly way for crypto meme token) and all that data is saved to DB.

So in result we have clusters which can have multiple data contents (currently onle news articles). But this isn't enough. Even though we have a lot of different analyses, it still needs a lot of time to analyze content analysises. Because of that we need to somehow summarize those different analysises in one cluster. For that we are using **median** values from each analysis answers. Because of that we can find those opinion, those real analysis that we need. And that is retrieved to user.

## **Use Cases**  

Imagine you are crypto meme trader or just average web3 person that want to buy "profitable" token but don't want to spend all eternity watching and analysing every news article. Because it's time consuming we can give this work to AI which would analyze news for us. When user want to find potential meme they can instanlt start from topic suggested by our platform and immediately start to deeple investigate only one topic instead of every. User just need to find topic with preferred answers for questions (analysis) and move from that point. If user want to investigate news only for example with celebrities or big companies - you're welcome. So in general this app would be interesting for:

- **Crypto traders** looking for early signals of potential meme coins.  
- **Crypto analysts** tracking emerging trends in the crypto space.  
- **Meme token creators** generating token ideas based on trending topics.  
- **Investors** assessing the viral potential of news-driven crypto movements.  

## RivensAI platfom integration

On cluster details page cluster can have suggested token metadatas (name, symbol). We are using GraphQL to retrieve tokens launched on RivensAI that contain one of suggested names or symbols, and show user it's address so user can go to platform and buy it (there is np link to token page on rivens because I coulnd't manage to find api where I can retrieve token page uuid by providing token address, so we just show address of token and symbol launched on rivens)

## Diagram

![Diagram.png](https://raw.githubusercontent.com/tarasnurko/memelysis/main/Diagram.png)

## App Images

To get imagine about app go to [images folder](https://github.com/tarasnurko/memelysis/tree/main/images)