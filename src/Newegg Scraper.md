---
pageTitle: Matthew's Portfolio - Newegg Scraper
---
%%
pageTags:: #WebsitePage #Project/Web #Skill/Language/JS #Skill/Language/HTML #Skill/Language/JSON #Skill/LibraryFramework/Puppeteer #Skill/Environment/NodeJS #Skill/PackageManager/NPM #Skill/DeveloperTool/Git/Client/GithubDesktop #Skill/DeveloperTool/Git/Forge/Github #Skill/Work/Programmer/Data 
pageRank:: 200
projectName:: `$= dv.current().projectNameOverride ? dv.current().projectNameOverride : dv.current().file.name `
projectNameOverride:: 
projectImgSmall:: ![[Newegg Scraper.avif]]
projectImgLarge:: ![[Newegg Scraper.avif]]
projectLink:: https://github.com/northmatt/NeweggScraper-Bot
projectDateStart:: 2021-01-12
projectDateEnd:: 2021-02-23
projectDesc:: Scrapes Newegg for specific items and attempts to automatically buy them when in stock. Discord notifications are used to inform the user of successful purchase or errors.
projectOrganization:: 
projectTeam:: None
projectWorkRole:: Lead Developer
projectWorkDescSmall:: Developed essential features for scrapping and buying items.
projectWorkDescSmall:: Used various special techniques to avoid bot detection.
projectWorkDescLarge:: Developed essential features for scrapping and buying items.
projectWorkDescLarge:: Used various special techniques to avoid bot detection.

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