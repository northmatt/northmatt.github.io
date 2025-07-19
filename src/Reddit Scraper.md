---
pageTitle: Matthew's Portfolio - Reddit Scraper
---
%%
pageTags:: #WebsitePage #Project/Web #Skill/Language/JS #Skill/Language/HTML #Skill/Language/JSON #Skill/LibraryFramework/Puppeteer #Skill/Environment/NodeJS #Skill/PackageManager/NPM #Skill/DeveloperTool/Git/Client/GithubDesktop #Skill/DeveloperTool/Git/Forge/Github #Skill/Work/Programmer/Data 
pageRank:: 100
projectName:: `$= dv.current().projectNameOverride ? dv.current().projectNameOverride : dv.current().file.name `
projectNameOverride:: 
projectImgSmall:: ![[Reddit Scraper.avif]]
projectImgLarge:: ![[Reddit Scraper.avif]]
projectLink:: https://github.com/northmatt/RedditScraper-Bot
projectDateStart:: 2023-03-27
projectDateEnd:: 2023-04-03
projectDesc:: Scrapes a subreddit for a specific query and sends a Discord notification when the query succeeds.
projectOrganization:: 
projectTeam:: None
projectWorkRole:: Lead Developer
projectWorkDescSmall:: Utilized HTTPS fetch requests for low bandwidth and low latency scraping.
projectWorkDescSmall:: Reversed engineered Reddit's API to not require developer API token.
projectWorkDescLarge:: Utilized HTTPS fetch requests for low bandwidth and low latency scraping.
projectWorkDescLarge:: Reversed engineered Reddit's API to not require developer API token.

Trailer Embed, Screenshots insert

```dataviewjs
await dv.view("Views/ProcessFrontMatter")
```
%%
```dataviewjs
await dv.view("Views/FormatMainHeader")
```
`$= dv.current().projectImgLarge `
## Project Information

> [!Info] Description
> `$= dv.current().projectDesc `

`````col
````col-md
> [!Info] Timeline
> `$= await dv.view("Views/FormatHumanDate", [dv.current().projectDateStart, dv.current().projectDateEnd]) `
````

````col-md
> [!Info] Languages
> `$= await dv.view("Views/FilterRename", [dv.current().file.etags, "Language"]) `
````

````col-md
> [!Info] Team
> `$= [dv.current().projectTeam].flat().join("\n") `
````

````col-md
> [!Info] Links
> `$= await dv.view("Views/FilterRename", [dv.current().projectLink, "http"]) `
````
`````

## Roles and Responsibilities
```dataviewjs
dv.span(dv.current().projectWorkDescLarge)
```


%%

%%