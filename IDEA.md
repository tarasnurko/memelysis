1. Parsing news, retrieve title, desription
2. Make embeddings from news description
3. Find in DB similar topic using embedding
    - If there is no similar topic create one
    - If there is already existing topic just get id of it
4. Analyze news content on such things:
    - how much is it trending now: no/probably/trending/verty tranding
    - can this be tranding in near future: no/probably/trending/verty tranding
    - is this news related with celebrity: yes/no
    - is it great information drive: no/unlikely/probably/yes
    - has there been anything like this before?: no/similar/yes
    - how greately does it impact crypto: no impact/small impact/medium impact/big impact/huge impact
    - TODO: add more questions
5. save news with its analysis, and connect it to it's topic

6. define for each question's answers appropriate niverical value which in sum would mean how much news can be used to boos some crypto meme token popularity
7. for each news ask chatgpt to generate crypto token names and symbols

Table that saves unique news descriptions with it's embedding
ContentEmbeddings {
    id
    text
    embedding
}

Analyses {
    trandingNow
    willTrand
    isCelebrityRelated
    greatInformationDrive
    wasAlreadyDone
    impactOnCrypto
}

News {
    id
    title
    excerpt
    topic
}