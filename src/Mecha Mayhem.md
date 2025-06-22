---
pageTitle: Matthew's Portfolio - Mecha Mayhem
---
%%
pageTags:: #WebsitePage #Project/Game #Shipped #Skill/Language/CPP #Skill/Language/GLSL #Skill/GameEngine/CustomOpenGL #Skill/LibraryFramework/Bullet3 #Skill/LibraryFramework/FMOD #Skill/DeveloperTool/Git/Client/GithubDesktop #Skill/DeveloperTool/Git/Forge/Github #Skill/DeveloperTool/VisualStudio #Skill/Work/Programmer/Shader #Skill/Work/Programmer/Backend 
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