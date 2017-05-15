# [@nupinion](https://twitter.com/nupinion)

[Here is Denise's presentation!](https://docs.google.com/presentation/d/1foMU-YTwQEaiDCdo6wTrYFLVdLurfYxsRc2fsCq0IfU/edit?usp=sharing) 

### The problem

* Information overload
* Deliberate misinformation
* Echo chambers
* Language barriers

### Nupinion trajectories

* Philosophy / Mission (why)
* Technology (what)
* Entrepreneurship / Sustainability (how)

### The issue with facts

> The are no facts, only interpretations (Friedrich Nietzsche)

> There is no truth, only perception (Gustave Flaubert)

Example: [Fake news and fact-checking: Trump is demonstrating how to outsmart an AI](https://www.theguardian.com/science/2017/jan/31/fake-news-and-fact-checking-trump-is-demonstrating-how-to-outsmart-an-ai-artificial-intelligence)

It's really hard to extract any comprehensive, factual information in a world overloaded with information.

**Embrace bias**: explore relationships between facts, events and opinions. The goal is to provide some *context*.

### How

* Topics (eg Syria) +  sub-topics (eg Russia's involvement, migration crisis)
* Curation of people's opinions 
* Timelines
* Entities (people, places and organisations that are involved in a topic)
* Generalised algorithms
* Credibility (how do you calculate that algorithmically?)
* Summarise 
* Contextualise

1. Data (250.000 articles per day from RSS feeds and scraping)
2. Algorithms (clustering, entity extraction) 
3. UX and UI (different ways to visualise and interact with the content)

### Ethics

* Censorship, how to balance out quality content and less reliable but popular sources (eg: DailyMail)
* Algorithmic transparency: how do they work, why are they showing us certain information

### Entrepreneurship

What problems are you solving for whom?

It takes resilience, flexibility and imagination.

*Affinity* metrics: list features that people may want (rows) and people (columns), then see if there are patterns and clusters emerging.

Mapping out people behaviours, habits and routines. What do people do in practice, how are they consuming news?

*Pinterest for News*: sharing curated content enriched by artificial intelligence. 


# APIs

They have *instructions* and the data is *structured*.

[Mashape](https://www.mashape.com/) and [APIs.io](http://apis.io/) are search engines for APIs.

[Webhose.io](https://webhose.io/news-data-feed) is a comprehensive API for news articles.

We'll use the [Guardian API](http://open-platform.theguardian.com/) today. The [Explore sandboxy playground](http://open-platform.theguardian.com/explore/) is really cool.

The DailyMail used Microsoft face detection to profile immigrants and make a guesstimate about their ages. 

# Scraping

1. Go to URL (eg BBC home page)
2. Read data in (pretending to be a browser) as a long string
3. Parse the long string into HTML
4. Create list
5. Look for links `<a>` and work out which ones are articles (eg in `<a itemprop="url" href="/health/article-4497940/We-need-5-000-doctors.html">...</a>` we could look for the string `article`, in other websites you could use `class` eg `<a class="article...">...</a>`)
6. Add article links (anchors) to the list
7. Create a bucket `articleInfo = []`
8. For each anchor:
	- page = read in data \#string
	- soup = parsed(page)
	- from soup extract title, date, author etc 
	- articleInfo.append( [title, date, author] )  
9. Safe to file







