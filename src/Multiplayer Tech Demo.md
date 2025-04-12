---
pageTitle: Matthew's Portfolio - Multiplayer Tech Demo
---
%%
pageTags:: #WebsitePage #Project/TechPreview #Skill/Language/CS #Skill/GameEngine/Unity #Skill/DeveloperTool/Github #Skill/DeveloperTool/VisualStudio 
pageRank:: 120
projectName:: `$= dv.current().projectNameOverride ? dv.current().projectNameOverride : dv.current().file.name `
projectNameOverride:: 
projectImgSmall:: ![[Multiplayer Tech Demo Title.avif]]
projectImgLarge:: ![[Multiplayer Tech Demo Title.avif]]
projectLink:: https://github.com/northmatt/INFR3830U-Final
projectDateStart:: 2023-04-06
projectDateEnd:: 2023-04-09
projectDesc:: This project is a tech preview for networked multiplayer games. It was an experiment to learn lower level networking without the use of libraries that handles connections, disconnections, latency mitigations, etc.
projectOrganization:: 
projectTeam:: None
projectWorkRole:: Lead Programmer
projectWorkDescSmall:: Implemented networking via C# NET sockets.
projectWorkDescSmall:: Implemented predictive movement for latency mitigations.
projectWorkDescLarge:: Implemented networking via C# NET sockets.
projectWorkDescLarge:: Implemented a chat system, a lobby system, the ability to support up to 255 clients at a time.
projectWorkDescLarge:: Implemented predictive movement with dead reckoning.

Trailer Embed, Screenshots insert

```dataviewjs
app.fileManager.processFrontMatter(app.vault.getFileByPath(dv.current().file.path), (fm) => {
	fm.pageTitle = `${dv.page("Index").firstName}'s Portfolio - ${dv.current().projectNameOverride ? dv.current().projectNameOverride : dv.current().file.name}`;
});

dv.span("DataviewJS frontmatter manager here");
```
%%
# `$= app.plugins.plugins["templater-obsidian"].templater.current_functions_object.user.FormatMainHeader(dv) `
`$= dv.current().projectImgLarge `
## Project Information

> [!Info] Description
> `$= dv.current().projectDesc `

`````col
````col-md
> [!Info] Timeline
> `$= app.plugins.plugins["templater-obsidian"].templater.current_functions_object.user.FormatHumanDate(dv.current().projectDateStart, dv.current().projectDateEnd).join("\n") `
````

````col-md
> [!Info] Engine
> `$= app.plugins.plugins["templater-obsidian"].templater.current_functions_object.user.FilterRename(dv.current().file.etags, "GameEngine") `
> `$= app.plugins.plugins["templater-obsidian"].templater.current_functions_object.user.FilterRename(dv.current().file.etags, "Language") `
````

````col-md
> [!Info] Team
> `$= [dv.current().projectTeam].flat().join("\n") `
````

````col-md
> [!Info] Links
> `$= app.plugins.plugins["templater-obsidian"].templater.current_functions_object.user.FilterRename(dv.current().projectLink, "http").replace(", ", "\n") `
````
`````

## Work Description
```dataviewjs
dv.span(dv.current().projectWorkDescLarge)
```


%%
Hmm
%%