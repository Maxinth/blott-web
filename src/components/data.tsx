export type FinnhubNewsItem = {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
};

export const mockData: FinnhubNewsItem[] = [
  {
    category: "top news",
    datetime: 1752067800,
    headline:
      "Stablecoins could hurt bank profits, but not for a while: analyst",
    id: 7496389,
    image:
      "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
    related: "",
    source: "MarketWatch",
    summary:
      "The growing use of stablecoins could increase the cost of lending for banks if they have fewer deposits to draw from, Moody’s says.",
    url: "https://www.marketwatch.com/story/stablecoins-could-hurt-bank-profits-but-not-for-a-while-analyst-673b5778",
  },
  {
    category: "top news",
    datetime: 1752062700,
    headline:
      "This early-warning indicator is telling the stock market that a recession is more likely",
    id: 7496315,
    image:
      "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
    related: "",
    source: "MarketWatch",
    summary:
      "If you’re like many U.S. consumers, you’re more worried now about money.",
    url: "https://www.marketwatch.com/story/this-early-warning-indicator-is-telling-the-stock-market-that-a-recession-is-more-likely-825f2b87",
  },
  {
    category: "top news",
    datetime: 1752062280,
    headline:
      "Goldman identifies three bears that could disrupt the Goldilocks market environment",
    id: 7496316,
    image:
      "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
    related: "",
    source: "MarketWatch",
    summary:
      "After a stunning comeback for markets and sentiment, Goldman Sachs places three main risks in the spotlight",
    url: "https://www.marketwatch.com/story/goldman-identifies-three-bears-that-could-disrupt-the-goldilocks-market-environment-9c856b90",
  },
  {
    category: "top news",
    datetime: 1752061680,
    headline:
      "Merck dives into COPD treatments with $10 billion purchase of Verona Pharma",
    id: 7496317,
    image:
      "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
    related: "",
    source: "MarketWatch",
    summary:
      "Verona Pharma’s stock soars toward a record after $10 billion buyout deal with Merck.",
    url: "https://www.marketwatch.com/story/merck-dives-into-copd-treatments-with-10-billion-purchase-of-verona-pharma-cb1da621",
  },
  {
    category: "top news",
    datetime: 1752060900,
    headline:
      "Why interest-rate cuts won’t be the fuel the stock market needs to rocket higher",
    id: 7496318,
    image:
      "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
    related: "",
    source: "MarketWatch",
    summary:
      "There’s no consistent pattern to how the stock investors react when the Fed lowers rates.",
    url: "https://www.marketwatch.com/story/why-interest-rate-cuts-wont-be-the-fuel-the-stock-market-needs-to-rocket-higher-622dca61",
  },
  {
    category: "top news",
    datetime: 1752058620,
    headline:
      "Why this veteran advisor says it’s speculative not to have crypto in portfolios",
    id: 7496309,
    image:
      "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
    related: "",
    source: "MarketWatch",
    summary:
      "Ric Edelman argues that the time to invest in cryptocurrencies is now, while 95% of the world is still asleep.",
    url: "https://www.marketwatch.com/story/why-this-veteran-advisor-says-its-speculative-not-to-have-crypto-in-portfolios-61abf24c",
  },
  {
    category: "top news",
    datetime: 1752055200,
    headline:
      "What will it take for the Fed to cut rates in September? Look here for clues.",
    id: 7496302,
    image:
      "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
    related: "",
    source: "MarketWatch",
    summary:
      "Economists will be reading the minutes of the Federal Reserve’s June meeting to get a sense of what might have to happen in order for the central bank to cut interest rates in September.",
    url: "https://www.marketwatch.com/story/what-will-it-take-for-the-fed-to-cut-rates-in-september-look-here-for-clues-77dd2770",
  },
  // {
  //   category: "top news",
  //   datetime: 1752052740,
  //   headline:
  //     "Zuckerberg’s Meta reportedly takes stake in Ray-Ban maker, showing commitment to AI-powered smartglasses",
  //   id: 7496279,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary: "Meta  reportedly takes a 3% stake in EssilorLuxottica",
  //   url: "https://www.marketwatch.com/story/zuckerbergs-meta-reportedly-takes-stake-in-ray-ban-maker-showing-commitment-to-ai-powered-smartglasses-4d4e812d",
  // },
  // {
  //   category: "top news",
  //   datetime: 1752052500,
  //   headline:
  //     "When my friend was on her deathbed, her parents took $25,000 in cash and won’t give it to her son. Do we tell him?",
  //   id: 7496280,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "“They are a very religious family. These are the same people who hug the altar every week.”",
  //   url: "https://www.marketwatch.com/story/when-my-friend-was-on-her-deathbed-her-parents-took-25-000-in-cash-and-wont-give-it-to-her-son-do-we-tell-him-717d90bc",
  // },
  // {
  //   category: "top news",
  //   datetime: 1752051840,
  //   headline:
  //     "Talk show tycoon Steve Doocy finds a buyer for $1.8 million, 1-acre New Jersey property in just a week",
  //   id: 7496260,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Fox host Steve Doocy has found a buyer for the 4-bedroom home just a few weeks after stepping down from his role on “Fox & Friends.”",
  //   url: "https://www.marketwatch.com/story/talk-show-tycoon-steve-doocy-finds-a-buyer-for-1-8-million-1-acre-new-jersey-property-in-just-a-week-1bdc73ec",
  // },
  // {
  //   category: "top news",
  //   datetime: 1752051660,
  //   headline:
  //     "A stylish, efficient city car, the 2025 Fiat 500e is more than just a pretty face",
  //   id: 7496261,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "The fashionable and efficient Fiat 500e is a small electric hatchback with a big personality, now with a new Giorgio Armani edition.",
  //   url: "https://www.marketwatch.com/story/a-stylish-efficient-city-car-the-2025-fiat-500e-is-more-than-just-a-pretty-face-489ad75e",
  // },
  // {
  //   category: "top news",
  //   datetime: 1752047100,
  //   headline:
  //     "Ad giant WPP issues second profit warning this year. The stock is plunging.",
  //   id: 7496262,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "WPP shares sank Wednesday on the advertising giant’s second profit warning of the year, as it said clients were spending less and it was attracting fewer new clients than hoped.",
  //   url: "https://www.marketwatch.com/story/ad-giant-wpp-issues-second-profit-warning-this-year-the-stock-is-plunging-2f8dea07",
  // },
  // {
  //   category: "top news",
  //   datetime: 1752015060,
  //   headline:
  //     "Social Security touts customer-service milestones, but some say it’s ‘cherry picking’ performance improvements",
  //   id: 7496164,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "The lack of full metrics make it difficult to assess any claims of service enhancements, analysts said",
  //   url: "https://www.marketwatch.com/story/social-security-touts-customer-service-milestones-but-some-say-its-cherry-picking-performance-improvements-66a25a90",
  // },
  // {
  //   category: "top news",
  //   datetime: 1752013560,
  //   headline:
  //     "A key Apple executive is leaving at a pivotal time — but here’s why investors shouldn’t worry",
  //   id: 7496157,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Apple is known for its supply-chain prowess and is turning to a company veteran to become its next chief operating officer.",
  //   url: "https://www.marketwatch.com/story/a-key-apple-executive-is-leaving-at-a-pivotal-time-but-heres-why-investors-shouldnt-worry-d93ebc98",
  // },
  // {
  //   category: "top news",
  //   datetime: 1752009000,
  //   headline:
  //     "Oil prices are climbing because a new battle for global market share is brewing",
  //   id: 7496142,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Here’s why oil prices are climbing to their highest levels in two weeks, despite a group of oil producers agreeing to open the floodgates of global crude supply.",
  //   url: "https://www.marketwatch.com/story/oil-prices-are-climbing-because-a-new-battle-for-global-market-share-is-brewing-f54e39ba",
  // },
  // {
  //   category: "top news",
  //   datetime: 1752008940,
  //   headline:
  //     "ProKidney’s stock rockets on ‘intriguing’ news, but analyst doesn’t recommend buying",
  //   id: 7496143,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "ProKidney’s stock was the biggest gainer and most actively traded on Tuesday following “very intriguing” news regarding the biotech’s CKD and diabetes treatment.",
  //   url: "https://www.marketwatch.com/story/prokidneys-stock-rockets-on-intriguing-news-but-analyst-doesnt-recommend-buying-19ce3f45",
  // },
  // {
  //   category: "top news",
  //   datetime: 1752008640,
  //   headline:
  //     "How junk bonds are signaling the same optimism about the U.S. economy as stocks",
  //   id: 7496144,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "The U.S. junk bond market is sending an optimistic message about the economy, despite market volatility around tariffs.",
  //   url: "https://www.marketwatch.com/story/how-junk-bonds-are-signaling-the-same-optimism-about-the-u-s-economy-as-stocks-46c56cc5",
  // },
  // {
  //   category: "top news",
  //   datetime: 1752008340,
  //   headline:
  //     "Can McDonald’s new Spicy McMuffin cash in on the fiery flavor boom — or is it just a peppery gimmick?",
  //   id: 7496136,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Fast-food chains, from Popeyes to Subway, have been turning up the heat. Now McDonald’s is spicing up its breakfast menu.",
  //   url: "https://www.marketwatch.com/story/can-mcdonalds-new-spicy-mcmuffin-cash-in-on-the-fiery-flavor-boom-or-is-it-just-a-peppery-gimmick-216f2139",
  // },
  // {
  //   category: "top news",
  //   datetime: 1752007920,
  //   headline:
  //     "More tariff letters look set to hit. A Trump official says they’ll include a ‘general’ notice.",
  //   id: 7496137,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "U.S. Commerce Secretary Howard Lutnick said Tuesday that another batch of tariff letters was close to going out, followed by “a general letter” that would cover trading partners that didn’t get their own missives.",
  //   url: "https://www.marketwatch.com/story/more-tariff-letters-look-set-to-hit-a-trump-official-says-theyll-include-a-general-notice-9f9d1849",
  // },
  // {
  //   category: "top news",
  //   datetime: 1752005340,
  //   headline:
  //     "Don’t spend thousands on a couples’ trip without taking these 3 steps first — or you risk fighting the whole time",
  //   id: 7496117,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "You can avoid, or at least minimize, conflict by setting financial and experiential expectations. Here are three ways to do that before your vacation.",
  //   url: "https://www.marketwatch.com/story/dont-spend-thousands-on-a-couples-trip-without-taking-these-3-steps-first-or-you-risk-fighting-the-whole-time-ab04d4e5",
  // },
  // {
  //   category: "top news",
  //   datetime: 1752003780,
  //   headline:
  //     "Think you’ve missed the stock-market rally since ‘liberation day’? Think again.",
  //   id: 7496103,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "A big, fast rally can look pretty scary to investors. New research says there may be reasons for optimism.",
  //   url: "https://www.marketwatch.com/story/think-youve-missed-the-stock-market-rally-since-liberation-day-think-again-bd0607a1",
  // },
  // {
  //   category: "top news",
  //   datetime: 1752003240,
  //   headline: "U.S. consumers shun credit cards in May, and borrowing cools",
  //   id: 7496104,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Overall consumer credit rises by $5.1 billion, half what was expected.",
  //   url: "https://www.marketwatch.com/story/u-s-consumers-shun-credit-cards-in-may-and-borrowing-cools-2ad4de29",
  // },
  // {
  //   category: "top news",
  //   datetime: 1752002820,
  //   headline:
  //     "Trump is revving up his trade war again. Here’s why investors aren’t panicking just yet.",
  //   id: 7496098,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "President Trump on Tuesday vowed to not back down on his new Aug. 1 deadline on tariffs — but Wall Street isn’t convinced.",
  //   url: "https://www.marketwatch.com/story/trump-is-revving-up-his-trade-war-again-heres-why-investors-arent-panicking-just-yet-42031d15",
  // },
  // {
  //   category: "top news",
  //   datetime: 1752002340,
  //   headline:
  //     "The dollar is having its worst year since Nixon. Three reasons it will get even weaker.",
  //   id: 7496099,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "The U.S. dollar just tallied its worst start to a calendar year since the era of free-floating exchange rates began. The second half of 2025 likely won’t be much better.",
  //   url: "https://www.marketwatch.com/story/the-dollar-is-having-its-worst-year-since-nixon-three-reasons-it-will-get-even-weaker-fc3c7a20",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751998920,
  //   headline:
  //     "Wendy’s CEO is leaving. An analyst hopes new leadership will ‘get more serious’ about a restaurant overhaul.",
  //   id: 7496083,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "As the fast-food chain seeks a permanent replacement for departing CEO Kirk Tanner, one analyst suggests that new leadership will have its work cut out.",
  //   url: "https://www.marketwatch.com/story/wendys-ceo-is-leaving-an-analyst-hopes-new-leadership-will-get-more-serious-about-a-restaurant-overhaul-25eb0c7f",
  // },
  // {
  //   category: "business",
  //   datetime: 1751998642,
  //   headline:
  //     "TSA plans to let travelers keep their shoes on at airport security checkpoints",
  //   id: 7496085,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108142492-1746647949080-gettyimages-2213291381-1505425-me-real-id-airports-09.jpeg?v=1746648040&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary: "TSA briefed industry members about the change on Tuesday.",
  //   url: "https://www.cnbc.com/2025/07/08/tsa-shoes-airport-security.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751998063,
  //   headline:
  //     "Here are winners and losers of Tuesday's stealth market rotation — plus, Nvidia $4T watch",
  //   id: 7496074,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108148885-1747851478699-gettyimages-2203983775-atill112rr_02600.jpeg?v=1751998053&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "Every weekday, the Investing Club releases the Homestretch; an actionable afternoon update just in time for the last hour of trading.",
  //   url: "https://www.cnbc.com/2025/07/08/here-are-winners-and-losers-of-tuesdays-stealth-market-rotation-plus-nvidia-4t-watch.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751995592,
  //   headline:
  //     "Honeywell gives shareholders another reason to like the stock ahead of its breakup",
  //   id: 7496063,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108061552-1731426974529-gettyimages-2118357232-_0005099JPG.jpeg?v=1743010449&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "Shares on Tuesday were on track for a record close after the industrial conglomerate said it is re-evaluating what to do with two lagging businesses.",
  //   url: "https://www.cnbc.com/2025/07/08/honeywell-gives-shareholders-another-reason-to-like-the-stock-ahead-of-its-breakup.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751992480,
  //   headline:
  //     "Here's why Jim Cramer believes GE Vernova's big rally has more room to go",
  //   id: 7496048,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/107421610-1717016762050-gettyimages-1663554533-_iss2062_2m4dmgj1.jpeg?v=1751992012&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     'The Investing Club holds its "Morning Meeting" every weekday at 10:20 a.m. ET.',
  //   url: "https://www.cnbc.com/2025/07/08/heres-why-jim-cramer-believes-ge-vernovas-big-rally-has-more-room-to-go.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751992262,
  //   headline:
  //     "'Free money' from Trump accounts is a 'no-brainer,' says expert—but other options may be better",
  //   id: 7496047,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108168201-17518870072025-07-05t031641z_837719211_rc23gfa1mcmq_rtrmadp_0_usa-trump.jpeg?v=1751887110&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "The budget bill signed into law on Friday includes a provision for investment accounts for newborns. Citizens born between 2025 and 2028 will get $1,000.",
  //   url: "https://www.cnbc.com/2025/07/08/how-trump-accounts-work.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751989385,
  //   headline:
  //     "Black Americans who moved abroad say they're happier outside the U.S.: 'It is truly a more fulfilling, richer life'",
  //   id: 7496031,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108074813-1733959190881-Cara_husband_and_daughter_happy.bmp?v=1734367375&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "Living abroad can offer Americans a lower cost of living and higher quality of life, say Black expats.",
  //   url: "https://www.cnbc.com/2025/07/08/black-expats-living-abroad-is-cheaper-safer-more-inclusive.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751988000,
  //   headline:
  //     "CoreWeave’s stock has quadrupled since the IPO — and that’s just one reason some analysts are cautious",
  //   id: 7496024,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "CoreWeave is highly reliant on Microsoft for revenue. Plus, soon insiders will be able to sell shares after the post-IPO lockup period expires.",
  //   url: "https://www.marketwatch.com/story/coreweaves-stock-has-quadrupled-since-the-ipo-and-thats-just-one-reason-some-analysts-are-cautious-430fe6be",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751986980,
  //   headline:
  //     "Circle’s stock should be worth less than half what it is now, analyst says",
  //   id: 7496015,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Mizuho’s Dan Dolev is the third analyst to make a bearish call on Circle Internet’s stock, with a price target that is nearly 60% below recent prices.",
  //   url: "https://www.marketwatch.com/story/circles-stock-should-be-worth-less-than-half-what-it-is-now-analyst-says-794da220",
  // },
  // {
  //   category: "business",
  //   datetime: 1751986801,
  //   headline:
  //     "Boeing delivers most airplanes since late 2023 after ramping up 737 Max output",
  //   id: 7496016,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108046797-1728672953867-AP24256680537090.jpg?v=1728682669&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "Boeing handed over 60 airplanes last month, the most since December 2023.",
  //   url: "https://www.cnbc.com/2025/07/08/boeing-airplane-deliveries-june.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751986717,
  //   headline:
  //     "Jim Cramer says a $4 trillion stock market value is just the start for Nvidia",
  //   id: 7496046,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108148485-1747804509140-gettyimages-2215472011-TAIWAN_COMPUTEX.jpeg?v=1751985181&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     '"If it were just a semiconductor [company], this stock would be at $58, not $158," Jim Cramer said Tuesday.',
  //   url: "https://www.cnbc.com/2025/07/08/jim-cramer-says-a-4-trillion-stock-market-value-is-just-the-start-for-nvidia.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751986680,
  //   headline:
  //     "Home sellers have gotten tired of cutting prices. So they’re yanking their houses off the market.",
  //   id: 7496005,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Home sellers in some of the nation’s worst housing markets are tired of cutting prices. So they’re pulling their listings.",
  //   url: "https://www.marketwatch.com/story/sellers-have-gotten-tired-of-cutting-prices-in-these-real-estate-markets-so-theyre-yanking-their-houses-off-the-market-4f9e06ee",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751986620,
  //   headline: "Return of the Rishi: Sunak back at Goldman Sachs",
  //   id: 7496006,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "The man who led the U.K.’s Conservative Party to its worst-ever electoral defeat in 2024 is returning to Goldman Sachs after a 20-year hiatus.",
  //   url: "https://www.marketwatch.com/story/return-of-the-rishi-sunak-back-at-goldman-sachs-61384c19",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751986560,
  //   headline:
  //     "Here’s what the megabill means for retirees’ taxes, according to a financial adviser",
  //   id: 7496007,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Social Security, Medicare, MAGI and IRMAA: What your new tax return might look like in April if you’re 65 or older.",
  //   url: "https://www.marketwatch.com/story/heres-what-the-megabill-means-for-retirees-taxes-according-to-a-financial-adviser-3041a52b",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751984520,
  //   headline:
  //     "Dividend yields for U.S. stocks are nearing record lows, and investors don’t seem to care. Here’s why they should.",
  //   id: 7495970,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "For the first time since 2000, dividend yields for stocks in the S&P 500 are nearing record lows, according to Deutsche Bank.",
  //   url: "https://www.marketwatch.com/story/dividend-yields-for-u-s-stocks-are-nearing-record-lows-and-investors-dont-seem-to-care-heres-why-they-should-2e973307",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751983920,
  //   headline:
  //     "Oracle’s stock is a ‘standout’ in the software sector, these analysts say. Here’s why.",
  //   id: 7495964,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "The company’s recent cloud-services agreements should strengthen its position and improve confidence in the company’s longer-term financial prospects, according to Jefferies.",
  //   url: "https://www.marketwatch.com/story/oracles-stock-is-a-standout-in-the-software-sector-these-analysts-say-heres-why-657de921",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751983746,
  //   headline:
  //     "If your partner uses any of these 7 phrases every day, it means they 'truly trust' you: Harvard-trained psychologist",
  //   id: 7495967,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108110842-1741123408881-CNBC_Growing_Old_Together_v3.jpg?v=1741123451&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "In the happiest and most successful relationships, both people feel comfortable being themselves. Harvard-trained psychologist Dr. Cortney Warren shares the phrases that couples who feel safe and secure say to each other every day.",
  //   url: "https://www.cnbc.com/2025/07/08/harvard-psychologist-couples-who-truly-trust-each-other-use-these-phrases-in-relationships.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751983560,
  //   headline:
  //     "A $400 pineapple? Here’s what’s coming for grocery shoppers with gourmet tastes.",
  //   id: 7495965,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "At the Fancy Food Show, the big trade event for gourmet fare, noteworthy products also included quail eggs, Indian-spiced potato chips and the sweet treat known as Dubai chocolate.",
  //   url: "https://www.marketwatch.com/story/a-400-pineapple-heres-whats-coming-for-grocery-shoppers-with-gourmet-tastes-c157ee27",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751983255,
  //   headline:
  //     "At 23, she became a wedding planner. A decade later, she's raised $550,000 for her nuptials startup—with Kerry Washington as lead investor",
  //   id: 7495966,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108167641-1751552716224-Amy_Shack_Egan_Pic_1.jpeg?v=1751565205&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "Amy Shack Egan started planning weddings at 23. Now, she's raised $550,000 for her wedding coordination startup — with Kerry Washington as lead investor.",
  //   url: "https://www.cnbc.com/2025/07/08/33-year-olds-wedding-startup-cheersy-raised-550kwith-kerry-washington-as-lead-investor.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751983201,
  //   headline:
  //     "7 science-backed foods that help you feel younger and sharper into your 70s",
  //   id: 7496012,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108168365-1751901851906-gettyimages-1277510906-veganfood_5.jpeg?v=1751901894&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "A study conducted by Harvard researchers found that eating mainly plant-based can lead to healthy aging, even if you start in middle age.",
  //   url: "https://www.cnbc.com/2025/07/08/7-science-backed-foods-that-help-you-feel-younger-sharper.html",
  // },
  // {
  //   category: "business",
  //   datetime: 1751982175,
  //   headline: "Wendy's CEO Kirk Tanner tapped to lead Hershey",
  //   id: 7495953,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/107361442-1705616192584-gettyimages-1197858840-POWER_PLAYERS_SUMMIT.jpeg?v=1751981257&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "Wendy's CEO Kirk Tanner has been named the new chief executive of The Hershey Company, effective August 18.",
  //   url: "https://www.cnbc.com/2025/07/08/wendys-ceo-kirk-tanner-tapped-to-lead-hershey.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751977320,
  //   headline:
  //     "WeightWatchers emerges from bankruptcy, and is taking aim at menopause",
  //   id: 7495903,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "WeightWatchers’ stock was surging after the company emerged from bankruptcy two months after it was announced.",
  //   url: "https://www.marketwatch.com/story/weightwatchers-emerges-from-bankruptcy-and-is-taking-aim-at-menopause-96661116",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751976720,
  //   headline:
  //     "Here’s what is most likely to cause a summer market crisis, according to Deutsche Bank",
  //   id: 7495904,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "With thin liquidity and lots of market players absent, the third quarter can often be accompanied by market turmoil.",
  //   url: "https://www.marketwatch.com/story/market-crises-are-most-common-in-the-summer-deutsche-bank-identifies-the-most-likely-culprits-if-there-was-one-this-time-9df28fa1",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751975400,
  //   headline:
  //     "How Trump’s budget is gambling with your savings and investments",
  //   id: 7495905,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Investor assumptions that wealth will continuously increase is about to be tested.",
  //   url: "https://www.marketwatch.com/story/how-trumps-budget-is-gambling-with-your-savings-and-investments-ac8436fc",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751975400,
  //   headline:
  //     "Here’s why Enphase and other solar stocks are tanking after Trump’s latest move",
  //   id: 7495906,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "The maker of solar-power components saw its stock downgraded after Trump’s executive order enforcing a phaseout of tax credits.",
  //   url: "https://www.marketwatch.com/story/heres-why-enphase-and-other-solar-stocks-are-tanking-after-trumps-latest-move-fdd2be69",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751974200,
  //   headline:
  //     "Here’s the open secret as U.S. tightens sanctions on Iran’s oil exports",
  //   id: 7495907,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "The U.S. continues to show it’s serious about punishing Iran for its nuclear ambitions and support for terrorism, but tighter sanctions on Tehran risk being a shot in the foot for America’s plans to keep crude-oil prices low.",
  //   url: "https://www.marketwatch.com/story/heres-the-open-secret-as-u-s-tightens-sanctions-on-irans-oil-exports-31eadab5",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751972820,
  //   headline:
  //     "Goldman Sachs lifts its S&P 500 forecasts. Strategists say these three investment moves are crucial.",
  //   id: 7495900,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Goldman say resilient earnings, earlier and bigger Fed rate cuts and more investor buying of stocks will drive the S&P 500 higher from here.",
  //   url: "https://www.marketwatch.com/story/goldman-sachs-lifts-its-s-p-500-forecasts-strategists-say-these-three-investment-moves-are-crucial-c7d2a661",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751972400,
  //   headline:
  //     "Treasury rout grows as tariffs and supply test demand after tax-and-spending bill",
  //   id: 7495901,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "U.S. government debt will face a crucial test from investors this week as it readies a series of Treasury auctions",
  //   url: "https://www.marketwatch.com/story/treasury-rout-grows-as-tariffs-and-supply-test-demand-after-tax-and-spending-bill-cd602515",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751969097,
  //   headline:
  //     "CNBC's Most Valuable Sports Empires 2025: Here's how the top 20 empires in the world stack up",
  //   id: 7495883,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108168495-1751914816001-gettyimages-1409725304-2022-02-13_superbowl_00286.jpeg?v=1751914830&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "The world's 20 most valuable sports ownership groups are worth a combined $225 billion, according to CNBC's Most Valuable Sports Empires 2025.",
  //   url: "https://www.cnbc.com/2025/07/08/cnbcs-most-valuable-sports-empires-2025-how-the-worlds-top-20-empires-rank.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751968800,
  //   headline: "Citi and JPMorgan signal elevated risks of profit taking",
  //   id: 7495881,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Research updates on investor positioning from JPMorgan and Citi indicate that bullish exposure is high, potentially setting up the circumstances for a near-term correction in U.S. risk assets.",
  //   url: "https://www.marketwatch.com/story/citi-and-jpmorgan-signal-elevated-risks-of-profit-taking-fe566a07",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751967840,
  //   headline:
  //     "I’m 85 with 2 kids and $4 million. My daughter wants a larger share of my estate than my son to compensate for unequal treatment by her father.",
  //   id: 7495882,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "“My daughter has severe health issues — lymphoma, which is now in remission.”",
  //   url: "https://www.marketwatch.com/story/im-85-with-2-kids-and-4-million-my-daughter-wants-a-larger-share-of-my-estate-than-my-son-to-compensate-for-unequal-treatment-by-her-father-7ea3b2d1",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751967240,
  //   headline: "I’m saving 100% on Amazon Prime Day — and you can too",
  //   id: 7495858,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Here’s the not-so-dirty secret behind the four-day shopping lollapalooza.",
  //   url: "https://www.marketwatch.com/story/im-saving-100-on-amazon-prime-day-and-you-can-too-3b56ef74",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751966700,
  //   headline:
  //     "Possible Trump pick for Fed has a plan to cut interest rates, with a catch",
  //   id: 7495855,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Kevin Warsh, the former Fed governor considered the most likely replacement for Jerome Powell to lead the Fed, on Monday night articulated his vision for policy.",
  //   url: "https://www.marketwatch.com/story/possible-trump-pick-for-fed-has-a-plan-to-cut-interest-rates-with-a-catch-52049d26",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751965500,
  //   headline:
  //     "Buyer snaps up Jessica Alba’s Beverly Hills mansion for $18.2 million",
  //   id: 7495851,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "The actress and her estranged spouse, Cash Warren, have secured a buyer for their “dream” Beverly Hills home, amid their ongoing divorce.",
  //   url: "https://www.marketwatch.com/story/buyer-snaps-up-jessica-albas-beverly-hills-mansion-for-18-2-million-3cc9f2ff",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751965320,
  //   headline: "Emma Roberts sells a ‘storybook’ home in L.A. for $4.8 million",
  //   id: 7495852,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Hollywood star Emma Roberts has sold her “grown-up dollhouse” for $4.8 million just 2 months after putting the sprawling L.A. dwelling on the market.",
  //   url: "https://www.marketwatch.com/story/emma-roberts-sells-a-storybook-home-in-l-a-for-4-8-million-bb51ee30",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751950222,
  //   headline: "Gift City Exchange set for first Foreign-Currency listing",
  //   id: 7496237,
  //   image:
  //     "https://data.bloomberglp.com/company/sites/2/2019/01/logobbg-wht.png",
  //   related: "",
  //   source: "Bloomberg",
  //   summary:
  //     "The planned listing will help underscore the growing sophistication of India’s capital markets and offer companies an alternative to domestic exchanges.",
  //   url: "https://www.bloomberg.com/news/articles/2025-07-08/indian-gift-city-exchange-set-for-first-foreign-currency-listing",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751950137,
  //   headline: "Jane Street defends India trading activity and blasts regulator",
  //   id: 7496238,
  //   image:
  //     "https://data.bloomberglp.com/company/sites/2/2019/01/logobbg-wht.png",
  //   related: "",
  //   source: "Bloomberg",
  //   summary:
  //     "In an email to staffers over the weekend, the American proprietary trading firm and market maker said it strongly rejects the premise and substance of an interim order from the Securities and Exchange Board of India that accused it of “index manipulation.”",
  //   url: "https://www.bloomberg.com/news/articles/2025-07-08/jane-street-defends-india-trading-activity-and-blasts-regulator",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751949142,
  //   headline: "Affordable homes in India dwindle to 7-Year low, report shows",
  //   id: 7496233,
  //   image:
  //     "https://data.bloomberglp.com/company/sites/2/2019/01/logobbg-wht.png",
  //   related: "",
  //   source: "Bloomberg",
  //   summary:
  //     "The trend is likely to get more entrenched as a slew of Indian developers, from Mahindra Lifespace Developers Ltd. to SignatureGlobal India Ltd., ditch affordable homes in favor of premium housing projects",
  //   url: "https://www.bloomberg.com/news/articles/2025-07-08/affordable-homes-in-india-dwindle-to-7-year-low-report-shows",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751948867,
  //   headline:
  //     "Australia pensions in $2.7 Trillion industry shift focus from US",
  //   id: 7496232,
  //   image:
  //     "https://data.bloomberglp.com/company/sites/2/2019/01/logobbg-wht.png",
  //   related: "",
  //   source: "Bloomberg",
  //   summary:
  //     "In addition to emerging markets, pension firms in Australia are putting more money into alternative investments like private equity, and niche products such as insurance bonds and asset-backed financing.",
  //   url: "https://www.bloomberg.com/news/articles/2025-07-07/australia-pensions-in-2-7-trillion-industry-shift-focus-from-us",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751946797,
  //   headline:
  //     "Oil declines as traders take stock of US tariffs and OPEC+ shift",
  //   id: 7496229,
  //   image:
  //     "https://data.bloomberglp.com/company/sites/2/2019/01/logobbg-wht.png",
  //   related: "",
  //   source: "Bloomberg",
  //   summary:
  //     "The oil market has been volatile in recent weeks after the war between Israel and Iran, with a fragile truce now in place, but tensions in the Middle East are starting to rise again following fresh attacks on shipping in the Red Sea",
  //   url: "https://www.bloomberg.com/news/articles/2025-07-07/latest-oil-market-news-and-analysis-for-july-8",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751929144,
  //   headline:
  //     "Jim Cramer says Trump's latest round of tariffs isn't 'meaningful'",
  //   id: 7495781,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/104741303-IMG_8456r-jim-cramer.jpg?v=1693437257&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "CNBC's Jim Cramer on Monday told investors that President Trump's latest round of tariffs might not have staying power.",
  //   url: "https://www.cnbc.com/2025/07/07/jim-cramer-says-trumps-latest-round-of-tariffs-isnt-meaningful.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751924940,
  //   headline:
  //     "Pro golfer Bryson Dechambeau says anyone outside the top 165 on the PGA Tour ‘is losing money’",
  //   id: 7495771,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Golfers  that are in the top 125 are having a great life, he says. “But I feel so bad for the guys who are 165” and lower.",
  //   url: "https://www.marketwatch.com/story/pro-golfer-bryson-dechambeau-says-anyone-outside-the-top-165-on-the-pga-tour-is-losing-money-c98f7d74",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751924580,
  //   headline:
  //     "Exxon just warned Wall Street of billion-dollar profit hits. Here’s what may cause it.",
  //   id: 7495772,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Exxon flags potential hit in profit just as OPEC and allies announce larger production increases.",
  //   url: "https://www.marketwatch.com/story/exxon-just-warned-wall-street-of-billion-dollar-profit-hits-heres-what-may-cause-it-e9108053",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751922120,
  //   headline:
  //     "Here’s when no taxes on overtime and tips, and other parts of Trump’s big bill, will kick in",
  //   id: 7495757,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "The changes won’t happen all at once. Here’s when Americans can expect key provisions of the GOP tax and spending bill to go into effect.",
  //   url: "https://www.marketwatch.com/story/heres-when-no-taxes-on-overtime-and-tips-and-other-parts-of-trumps-big-bill-will-kick-in-2af87057",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751919960,
  //   headline:
  //     "Trump’s latest clash with Elon Musk gives this stock a big boost",
  //   id: 7495738,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Shares of Rocket Lab Corp. ended Monday’s session up 9% amid the ongoing clash between President Donald Trump and SpaceX Chief Executive Elon Musk.",
  //   url: "https://www.marketwatch.com/story/trumps-latest-clash-with-elon-musk-gives-this-stock-a-big-boost-f1adb7e0",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751919180,
  //   headline: "How to use AI to find the best Amazon Prime Day deals",
  //   id: 7495739,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "More consumers are using artificial intelligence to shop, and generative-AI models can help shoppers find the best deals this Prime Day.",
  //   url: "https://www.marketwatch.com/story/how-to-use-ai-to-find-the-best-amazon-prime-day-deals-6dedb8c9",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751917620,
  //   headline:
  //     "Ulta Beauty is starting to separate itself from the competition, analyst says",
  //   id: 7495731,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Over recent months, cosmetics chain Ulta Beauty Inc. has faced competition from retail giants like Amazon.com Inc., Walmart Inc. and Target Corp., and some analysts on Wall Street have said its shelf selection leaned too heavily on older brands.",
  //   url: "https://www.marketwatch.com/story/ulta-beauty-is-starting-to-separate-itself-from-the-competition-analyst-says-9e18a927",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751917020,
  //   headline:
  //     "Trump’s tariff letters are hitting. Here’s how they differ from his earlier threats.",
  //   id: 7495727,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "President Donald Trump sent out tariff letters to U.S. trading partners on Monday as he had promised, starting with missives to Japan and South Korea before targeting Malaysia, South Africa and other countries.",
  //   url: "https://www.marketwatch.com/story/trumps-tariff-letters-are-hitting-heres-how-they-differ-from-his-earlier-threats-94a9e58a",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751916780,
  //   headline:
  //     "No tax on Social Security? Not quite. What the tax megabill really means for seniors.",
  //   id: 7495728,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "The enhanced standard deduction will offset what recipients pay in taxed benefits.",
  //   url: "https://www.marketwatch.com/story/no-tax-on-social-security-not-quite-what-the-tax-megabill-really-means-for-seniors-df275369",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751913360,
  //   headline:
  //     "Why Musk launching a new political party could be just what Tesla’s stock needs",
  //   id: 7495713,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Tesla’s stock is down because Elon Musk announced a new party. It should be up.",
  //   url: "https://www.marketwatch.com/story/why-musk-launching-a-new-political-party-could-be-just-what-teslas-stock-needs-56c1232f",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751912700,
  //   headline:
  //     "Has Netflix’s big push for growth gotten ahead of its stock price?",
  //   id: 7495708,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Netflix’s stock slipped after a downgrade at Seaport Research, which believes the it has already priced in growth that could be years down the line.",
  //   url: "https://www.marketwatch.com/story/has-netflixs-big-push-for-growth-gotten-ahead-of-its-stock-price-74186051",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751912640,
  //   headline:
  //     "Nvidia’s stock just got a more bullish endorsement from Citi — but here’s one fresh risk",
  //   id: 7495709,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "A Citi analyst sees Nvidia’s stock rising another 20% as the AI opportunity swells further, but he notes the risk of potential new geopolitical restrictions ahead.",
  //   url: "https://www.marketwatch.com/story/nvidias-stock-just-got-a-more-bullish-endorsement-from-citi-but-heres-one-fresh-risk-b5d242c9",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751912435,
  //   headline:
  //     "CoreWeave to acquire Core Scientific in $9 billion all-stock deal",
  //   id: 7495711,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108168420-1751908796143-gettyimages-2214069184-_s010032_nwf47ces.jpeg?v=1751910139&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "If the deal closes, CoreWeave won't have to pay rent to Core Scientific, a longtime partner, on several data center sites.",
  //   url: "https://www.cnbc.com/2025/07/07/coreweave-to-acquire-core-scientific-in-9-billion-all-stock-deal.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751912111,
  //   headline:
  //     "Stocks fall on Trump's new tariff threats, and an update on usage of Meta's Threads",
  //   id: 7495712,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/107403914-1713538274804-107403914-1713538186242-gettyimages-1506990256-dicola-metaanno230706_npsR9.jpg?v=1751911972&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "Every weekday, the Investing Club releases the Homestretch; an actionable afternoon update just in time for the last hour of trading.",
  //   url: "https://www.cnbc.com/2025/07/07/stocks-fall-on-trumps-new-tariff-threats-and-an-update-on-usage-of-metas-threads.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751911080,
  //   headline: "What’s next for the stock market? Contrarians have concerns.",
  //   id: 7495702,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Here’s what tends to happen when the Wall of Worry turns into the Slope of Hope.",
  //   url: "https://www.marketwatch.com/story/whats-next-for-the-stock-market-contrarians-have-concerns-f1217aea",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751910960,
  //   headline:
  //     "Stocks were flashing this warning signal before tariff jitters drove Dow down 500 points",
  //   id: 7495703,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "The S&P 500 was suggestion stocks were overbought before tariff jitters triggered a retreat Monday.",
  //   url: "https://www.marketwatch.com/story/stocks-were-flashing-this-warning-signal-before-tariff-jitters-drove-dow-down-500-points-dbaa2fdb",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751909280,
  //   headline:
  //     "IBM’s stock is beating Big Tech this year. Why this analyst sees more gains ahead.",
  //   id: 7495692,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "AI may pose a threat to software companies that charge customers per seat or employee, but IBM offers relative stability in part due to a different business model.",
  //   url: "https://www.marketwatch.com/story/ibms-stock-is-beating-big-tech-this-year-why-this-analyst-sees-more-gains-ahead-fe3898ef",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751908135,
  //   headline:
  //     "Why Jim Cramer says Nvidia may score a win in China — plus, CrowdStrike gets downgraded",
  //   id: 7495694,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108152092-1748543392198-gettyimages-2211073984-TFSPI_23042025-6790.jpeg?v=1751902732&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     'The Investing Club holds its "Morning Meeting" every weekday at 10:20 a.m. ET.',
  //   url: "https://www.cnbc.com/2025/07/07/why-jim-cramer-says-nvidia-may-score-a-win-in-china-plus-crowdstrike-gets-downgraded.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751907480,
  //   headline:
  //     "Why CoreWeave plans to buy Core Scientific — and why both stocks are dropping",
  //   id: 7495689,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "The $9 billion deal is a play on AI power needs, but one analyst thinks the purchase price undervalues Core Scientific’s business and potential.",
  //   url: "https://www.marketwatch.com/story/why-coreweave-plans-to-buy-core-scientific-and-why-both-stocks-are-dropping-aad658a2",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751907144,
  //   headline:
  //     "Jack Dorsey launches a WhatsApp messaging rival built on Bluetooth",
  //   id: 7495691,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/106859593-1616695102208-jack6.jpg?v=1616695156&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "Block CEO Jack Dorsey has launched Bitchat, a new peer-to-peer messaging app that works entirely over Bluetooth mesh networks.",
  //   url: "https://www.cnbc.com/2025/07/07/jack-dorsey-whatsapp-bluetooth.html",
  // },
  // {
  //   category: "business",
  //   datetime: 1751906491,
  //   headline: "'F1' is Apple's highest-grossing theatrical film ever",
  //   id: 7495674,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108168380-1751903234521-F1_The_Moive_Photo_0110_Cropped.jpg?v=1751903271&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     'Apple\'s "F1: The Movie" nears $300 million at the global box office, the highest-grossing haul of a film ever released by the studio.',
  //   url: "https://www.cnbc.com/2025/07/07/f1-apple-highest-grossing-theatrical-film.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751906220,
  //   headline:
  //     "17 bargain dividend stocks that are primed for growth — consider this before you buy",
  //   id: 7495672,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Companies passing the screen for low valuations, rapid dividend growth and business-expansion prospects include PepsiCo and Occidental Petroleum.",
  //   url: "https://www.marketwatch.com/story/17-bargain-dividend-stocks-that-are-primed-for-growth-consider-this-before-you-buy-b00be11b",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751905380,
  //   headline:
  //     "People are working longer — but are they claiming Social Security later?",
  //   id: 7495669,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary: "Two different measures tell a similar story",
  //   url: "https://www.marketwatch.com/story/people-are-working-longer-but-are-they-claiming-social-security-later-5f4d6f1c",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751902682,
  //   headline:
  //     "27-year-old ran a One Direction fan account as a teen—now she runs a media brand with 3.4M followers including Lorde and Bella Hadid: 'I love my job'",
  //   id: 7495662,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108167695-1751556014696-lucy_blakiston_sysca.jpeg?v=1751901389&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "Lucy Blakiston is the co-founder of S--- You Should Care About, a newsletter and social media page covering news and pop culture with 3.4 million followers.",
  //   url: "https://www.cnbc.com/2025/07/07/s-you-should-care-about-27-year-old-co-founder-on-building-a-media-empire.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751902560,
  //   headline: "The best ways to invest in stock funds",
  //   id: 7495653,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary: "There are plenty of choices. They don’t have to be difficult.",
  //   url: "https://www.marketwatch.com/story/the-best-ways-to-invest-in-stock-funds-95d25b4d",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751902359,
  //   headline:
  //     "We're booking profits in a top-performing bank stock in an extremely overbought market",
  //   id: 7495663,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108033240-1726150290190-David-Solomon-2.jpg?v=1726150505&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "We are scrutinizing the portfolio, reviewing every position to determine if we are being too greedy following the recent strength in the broader market,",
  //   url: "https://www.cnbc.com/2025/07/07/were-booking-profits-in-a-top-performing-bank-stock-in-an-extremely-overbought-market.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751902320,
  //   headline:
  //     "MicroStrategy didn’t buy more bitcoin — for the first time in three months",
  //   id: 7495654,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "MicroStrategy made news by not buying bitcoin in the latest week, marking its first pause in three months.",
  //   url: "https://www.marketwatch.com/story/microstrategy-didnt-buy-more-bitcoin-for-the-first-time-in-three-months-d663c6d0",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751901360,
  //   headline:
  //     "Is Meta’s pricey AI hiring spree worth it? This analyst has doubts.",
  //   id: 7495649,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Meta’s push for top-tier AI talent, which could cost up to $1.4 billion, raises questions about its approach to competing with other companies, a Rosenblatt analyst says.",
  //   url: "https://www.marketwatch.com/story/is-metas-pricey-ai-hiring-spree-worth-it-this-analyst-has-doubts-6c33e2b5",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751898360,
  //   headline:
  //     "Stellantis gets a downgrade. Its rebound may never come, analyst warns.",
  //   id: 7495624,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "The new chief executive of Stellantis faces a mountain of problems, and it’s too early for investors to go bottom fishing in the Jeep and Ram truck maker, a new research note published Monday says.",
  //   url: "https://www.marketwatch.com/story/stellantis-gets-a-downgrade-its-rebound-may-never-come-analyst-warns-9b26b2d8",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751898180,
  //   headline:
  //     "Chime Financial’s stock can rise a lot more even after its hot IPO, this analyst says",
  //   id: 7495625,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "J.P. Morgan’s Tien-tsin Huang initiates coverage of bank services company with an overweight rating and a projected 25% stock-price gain over the next 12 months",
  //   url: "https://www.marketwatch.com/story/chime-financials-stock-can-rise-a-lot-more-even-after-its-hot-ipo-this-analyst-says-67814c51",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751896260,
  //   headline:
  //     "I put my $500K inheritance into a joint account with my husband. Can I leave half of it to my son from a previous marriage?",
  //   id: 7495622,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "“If I predecease my husband, my will states that my son will receive half of this account.”",
  //   url: "https://www.marketwatch.com/story/i-put-my-500k-inheritance-into-a-joint-account-with-my-husband-can-i-leave-half-of-it-to-my-son-from-a-previous-marriage-ede3e879",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751894101,
  //   headline:
  //     "The right—and wrong—way for bosses to apologize: 'Timing is everything,' says communication expert",
  //   id: 7495607,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108163964-1750869780889-gettyimages-1297311790-dsc02055.jpeg?v=1750869792&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "Whether you're a big-time CEO or a middle manager of a small team, giving heartfelt, sincere apologies is important. Here's how to do it well.",
  //   url: "https://www.cnbc.com/2025/07/07/the-rightand-wrongway-for-bosses-to-apologize-communication-expert.html",
  // },
  // {
  //   category: "business",
  //   datetime: 1751893201,
  //   headline:
  //     "How Netflix keeps luring big-name directors away from the traditional box office",
  //   id: 7495601,
  //   image:
  //     "https://image.cnbcfm.com/api/v1/image/108167675-1751555537866-Untitled-2.jpg?v=1751555632&w=1920&h=1080",
  //   related: "",
  //   source: "CNBC",
  //   summary:
  //     "Directors like Rian Johnson, Greta Gerwig and Guillermo del Toro are working with Netflix thanks to lucrative contracts, creative freedom and a big audience.",
  //   url: "https://www.cnbc.com/2025/07/07/netflix-directors-streaming.html",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751892180,
  //   headline: "Don’t buy Wells Fargo’s stock at current prices, analyst says",
  //   id: 7495560,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "An analyst downgrades Wells Fargo’s stock and upgrades U.S. Bancorp as regional banks gain favor after big runups by the largest banks.",
  //   url: "https://www.marketwatch.com/story/dont-buy-wells-fargos-stock-at-current-prices-analyst-says-c08ffc4d",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751890740,
  //   headline:
  //     "Another health insurer has issued a profit warning. But its stock is climbing.",
  //   id: 7495561,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Molina Healthcare cuts its profit outlook, but its stock is rising after tumbling last week in response to rival Centene’s warning.",
  //   url: "https://www.marketwatch.com/story/another-health-insurer-has-issued-a-profit-warning-but-its-stock-is-climbing-ae93fd9a",
  // },
  // {
  //   category: "top news",
  //   datetime: 1751889720,
  //   headline:
  //     "Dow increases layoffs to more than 2,000 as demand for building materials remains weak",
  //   id: 7495562,
  //   image:
  //     "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
  //   related: "",
  //   source: "MarketWatch",
  //   summary:
  //     "Dow to close three plants and cut 800 jobs in addition to the 1,500 job cuts announced in January.",
  //   url: "https://www.marketwatch.com/story/dow-increases-layoffs-to-more-than-2-000-as-demand-for-building-materials-remains-weak-6b152bce",
  // },
];
