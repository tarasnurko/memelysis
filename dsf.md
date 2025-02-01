I am creating platform that analyzes news and tries to make some check list whether this news can be used for buying some crypto token. It must be some service that over some intervals retrieve news, analyze it and save result to DB which later is retrieved to used. The main puprpose of analyzing news is find first the news that can start some crypto trend.

Currently I have such prompt for analyzing news, but it's very bad because analysis is very far away from reality. 

export enum CurrentTrendingStatus {
    NotTrending = "Not Trending",
    SlightlyTrending = "Slightly Trending",
    Trending = "Trending",
    VeryTrending = "Very Trending",
    Viral = "Viral",
}

export enum FutureTrendPrediction {
    Unlikely = "Unlikely",
    Possible = "Possible",
    Likely = "Likely",
    VeryLikely = "Very Likely",
}

export enum CelebrityInvolvement {
    No = "No",
    Indirectly = "Indirectly",
    Yes = "Yes",
}

export enum CompanyInvolvement {
    None = "None",
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
}

export enum RegulatoryImpact {
    NoImpact = "No Impact",
    Small = "Small",
    Medium = "Medium",
    Strong = "Strong",
    GameChanging = "Game-Changing",
}

export enum HistoricalSimilarity {
    None = "None",
    SimilarWeakImpact = "Similar but Weak Impact",
    SimilarStrongImpact = "Similar and Strong Impact",
    SimilarGameChangingImpact = "Similar and Game-Changing Impact",
}

export enum CryptoAdoptionImpact {
    NoImpact = "No Impact",
    Small = "Small",
    Medium = "Medium",
    Big = "Big",
    Huge = "Huge",
}

export enum HypeFactor {
    None = "None",
    Mild = "Mild",
    Moderate = "Moderate",
    High = "High",
    Extreme = "Extreme",
}

export enum MemeTokenPotential {
    None = "None",
    Slightly = "Slightly",
    Likely = "Likely",
    Definitely = "Definitely",
}

function newsAnalysisPrompt(title: string, description: string, content: string) {
      return Given the following news title, description, and content, please answer the questions below. Each answer should be provided in the specific format mentioned at the beginning of this prompt.

Title: ${title}
Description: ${description}
Content: ${content}

Answer the following questions:
1. **Current Trending Status**: How much is this news trending right now? Answer using one of these options:
${arrayToPromptPoints(enumToArray(CurrentTrendingStatus))}

2. **Future Trend Prediction**: Do you think this news will trend in the near future? Answer using one of these options:
${arrayToPromptPoints(enumToArray(FutureTrendPrediction))}

3. **Celebrity Involvement**: Does this news involve a celebrity? Answer using one of these options:
${arrayToPromptPoints(enumToArray(CelebrityInvolvement))}

4. **Company Involvement**: What is the level of involvement of a company in this news? Answer using one of these options:
${arrayToPromptPoints(enumToArray(CompanyInvolvement))}

5. **Regulatory Impact**: How would this news impact regulation? Answer using one of these options:
${arrayToPromptPoints(enumToArray(RegulatoryImpact))}

6. **Historical Similarity**: Has something similar happened before in history? Answer using one of these options:
${arrayToPromptPoints(enumToArray(HistoricalSimilarity))}

7. **Crypto Adoption Impact**: How does this news affect the adoption of cryptocurrency? Answer using one of these options:
${arrayToPromptPoints(enumToArray(CryptoAdoptionImpact))}

8. **Hype Factor**: What is the hype factor for this news? Answer using one of these options:
${arrayToPromptPoints(enumToArray(HypeFactor))}

9. **Meme Token Potential**: Does this news have the potential to create a meme token? Answer using one of these options:
${arrayToPromptPoints(enumToArray(MemeTokenPotential))}

Provide the response in the following JSON format. Do not write anything except json output:

{
  "currentTrendingStatus": "Trending",
  "futureTrendPrediction": "Likely",
  "celebrityInvolvement": "Yes",
  "companyInvolvement": "Large",
  "regulatoryImpact": "Game-Changing",
  "historicalSimilarity": "Similar and Strong Impact",
  "cryptoAdoptionImpact": "Huge",
  "hypeFactor": "Extreme",
  "memeTokenPotential": "Definitely"
}

For example for such title, description and content

Title: Barclays customers face second day of issues after IT outage
Description: Online banking, the bank's app and payments in and out of accounts are all affected. 
Content: Barclays customers are experiencing intermittent errors with payments and transfers for a second day after serious IT problems that also affected the bank's app and online banking.
Customers have told the BBC they are unable to make essential transactions, ranging from buying baby milk to completing a house move.
Barclays said on Saturday that cards and cash machines could be used as normal - though some customers have said this is not the case.
A Barclays spokesperson said the bank is "working hard to fix the issue" and that it will "ensure that no impacted customer is left out of pocket".
The outage began on Friday, which was pay day for many people in the UK, and the deadline for self-assessment tax returns.
Barclays has not explained the cause of the IT problems or how many people are affected.
On Saturday afternoon, Barclays' website indicated that problems persisted with its app, and warned that customers may face issues making and receiving payments.
The website also told customers that the bank may not be able to assist with all queries in branches "due to issues we're facing".
Businessman Tim Horner from Petworth, West Sussex said on Saturday he has been unable to pay his staff or HMRC.

He told the BBC that he has had "multiple calls" from people trying to make payments to his ecommerce platform, saying that their payments are "being refused".
"I have lost thousands of pounds due to my online store being unable to receive payments as we have a Barclays account," Mr Horner said.
Ruth, 39, a self-employed cleaner, told BBC News she had been trying to access money with her partner from their savings account for several hours so she could buy milk for a baby and food for five other children she is looking after at home.
"We need the money to do shopping, our money is all in savings," she explained.
"I've got my granddaughter here who's 11 months old, also a one-year-old, two-year-old, 12-year-old, 13-year-old, 15-year-old all at home."
She said she had been able to get some help from her teenage daughter, but said others might not be so fortunate.
"There could be many single mums in the same situation with no access to money," she told the BBC.

AI response which analysis which is far away from reality:

{
  currentTrendingStatus: 'Trending',
  futureTrendPrediction: 'Likely',
  celebrityInvolvement: 'No',
  companyInvolvement: 'Large',
  regulatoryImpact: 'Medium',
  historicalSimilarity: 'Similar and Strong Impact',
  cryptoAdoptionImpact: 'Medium',
  hypeFactor: 'High',
  memeTokenPotential: 'None'
}

In reality for this news it should be like next
currentTrendingStatus: 'Not Trending', as it's not interesting for average people, it's just problem with one big company
futureTrendPrediction: 'Unlikely', reason same, average person doesn't interested in random problem of some company
celebrityInvolvement: 'No', it's correct as there is no celebrity in text
companyInvolvement: 'Large', it's true as large company is involved into news
regulatoryImpact: 'Medium', should be 'No Impact' because it has nothing to do with crypto or FIAT
historicalSimilarity: 'Similar and Strong Impact', instead it should be 'None' because it have no potential impact on crypto or memes or trands
cryptoAdoptionImpact: 'Medium', incorrect because it has nothing to do with crypto so this property should be 'No Impact'
hypeFactor: 'High', this news doesn't have any hype factor, and doesn't have any potential crypto hype factor so property value should be 'None'
memeTokenPotential: 'None' this is correct as this news is not related to crypto or FIAT and you can not create any meme with that.

Create better prompt according to provided data