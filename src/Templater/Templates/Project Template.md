---
pageTitle: Matthew's Portfolio - Project Template
---
%%
pageTags:: #WebsitePage #Project #Dataview/Exlude
pageRank:: 0
projectName:: `$= dv.current().projectNameOverride ? dv.current().projectNameOverride : dv.current().file.name `
projectNameOverride:: 
projectImgSmall:: 
projectImgLarge:: 
projectLink:: 
projectDateStart:: <% tp.date.now("YYYY-MM-DD", -1) %>
projectDateEnd:: <% tp.date.now("YYYY-MM-DD", 0) %>
projectDesc:: 
projectOrganization:: 
projectTeam:: 
projectWorkRole:: 
projectWorkDescSmall:: 
projectWorkDescLarge:: 

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
> [!Info] Engine & Languages
> `$= await dv.view("Views/FilterRename", [dv.current().file.etags, "GameEngine"]) `
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
