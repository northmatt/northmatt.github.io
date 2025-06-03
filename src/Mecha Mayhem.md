---
pageTitle: Matthew's Portfolio - Mecha Mayhem
---
%%
pageTags:: #WebsitePage #Project/Game #Shipped #Skill/Language/CPP #Skill/Language/GLSL #Skill/GameEngine/CustomOpenGL #Skill/LibraryFramework/Bullet3 #Skill/LibraryFramework/FMOD #Skill/DeveloperTool/Github #Skill/DeveloperTool/VisualStudio #Skill/Work/Programmer/Shader #Skill/Work/Programmer/Backend 
pageRank:: 40
projectName:: `$= dv.current().projectNameOverride ? dv.current().projectNameOverride : dv.current().file.name `
projectNameOverride:: 
projectImgSmall:: ![[Mecha Mayhem Title.avif]]
projectImgLarge:: ![[Mecha Mayhem Title.avif]]
projectLink:: https://github.com/Jonathan-Jay/Mecha-Mayhem
projectLink:: https://jjthething.itch.io/mm-demo
projectDateStart:: 2020-09-01
projectDateEnd:: 2021-04-01
projectDesc:: Mecha Mayhem is a third-person shooter, couch party, arena brawler style game. Battle against your opponents in a simulated battle arena, picking up weapons as you go along. When your weapons run out of ammo, you lose them and you need to find a new one.
projectOrganization:: JayPEG
projectTeam:: 3 Programmers
projectTeam:: 2 Artists
projectTeam:: 1 Game Designer
projectWorkRole:: Programmer
projectWorkDescSmall:: Developed and optimized essential GLSL shaders and rendering backend.
projectWorkDescSmall:: Developed essential backend for managing scenes.
projectWorkDescLarge:: Developed and optimized essential GLSL shaders and rendering backend.
projectWorkDescLarge:: Developed essential backend for managing scenes.
projectWorkDescLarge:: Merged GIT branches and solved merge conflicts.

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
* Scene Manager with QueueSceneChange
* GLSL Shader and OpenGL backend binding optimization
* Awarded for Best Tech during Ontario Tech University’s Gamecon 2021

## Source Code and Download:
https://youtu.be/pFOknjEUpP0
%%