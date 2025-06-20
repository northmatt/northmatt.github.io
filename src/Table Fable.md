---
pageTitle: Matthew's Portfolio - Table Fable
---
%%
pageTags:: #WebsitePage #Project/Game #Shipped #Skill/Language/CS #Skill/GameEngine/Unity #Skill/DeveloperTool/Github #Skill/DeveloperTool/VisualStudio #Skill/Work/Artist/Technical #Skill/Work/Programmer/GameMechanic 
pageRank:: 60
projectName:: `$= dv.current().projectNameOverride ? dv.current().projectNameOverride : dv.current().file.name `
projectNameOverride:: 
projectImgSmall:: ![[Table Fable Title.avif]]
projectImgLarge:: ![[Table Fable Title.avif]]
projectLink:: https://github.com/Jonathan-Jay/Card-Game
projectLink:: https://jjthething.itch.io/table-fable
projectDateStart:: 2022-01-01
projectDateEnd:: 2022-04-01
projectDesc:: Table Fable is a two player, online card style game. Players battle each other using a variety of cards drawn from their deck. They can attack their opponent by playing monster cards on the board or use a spell card to gain the upper hand with various tricks.
projectOrganization:: JayPEG
projectTeam:: 2 Programmers
projectTeam:: 2 Artists
projectTeam:: 1 Game Designer
projectTeam:: 1 Audio Engineer
projectWorkRole:: Programmer
projectWorkDescSmall:: Developed interactive and particle animations for feedback/ambience.
projectWorkDescSmall:: Developed essential features for card interaction.
projectWorkDescLarge:: Designed and developed interactive animations for cards and particle animations for ambient objects.
projectWorkDescLarge:: Developed essential features for card interaction in 3D world and for spectating.

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
> [!Info] Engine & Languages
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
Candle animation
Card handsplay animation
Volume control
Worldspace cursor
Spectator Controller

https://youtu.be/vwXxnK0DSIo
%%