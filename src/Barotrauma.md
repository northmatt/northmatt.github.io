---
pageTitle: Matthew's Portfolio - Barotrauma
---
%%
pageTags:: #WebsitePage  #Project/Game  #Shipped  #Skill/Language/CPP  #Skill/GameEngine/CustomOpenGL  #Skill/LibraryFramework/Box2D  #Skill/LibraryFramework/FMOD #Skill/DeveloperTool/Git/Client/GitKraken #Skill/DeveloperTool/Git/Forge/Github #Skill/DeveloperTool/PhotoShop #Skill/DeveloperTool/VisualStudio #Skill/Work/Programmer/AI #Skill/Work/Programmer/GameMechanic #Skill/Work/Programmer/Physics #Skill/Work/Programmer/Backend 
pageRank:: 80
projectName:: `$= dv.current().projectNameOverride ? dv.current().projectNameOverride : dv.current().file.name `
projectNameOverride:: 
projectImgSmall:: ![[Barotrauma Title.avif]]
projectImgLarge:: ![[Barotrauma Title.avif]]
projectLink:: https://github.com/Jonathan-Jay/JayPEG
projectLink:: https://jjthething.itch.io/barotrauma
projectDateStart:: 2020-01-01
projectDateEnd:: 2020-04-01
projectDesc:: Barotrauma is a 2D platformer metroidvania style game. Infiltrate the enemy base to defeat the big bad boss who is trying to take over the world. Steal their resources to upgrade your weapons and armour to break through the obstacles that have been set up to stop you. 
projectOrganization:: JayPEG
projectTeam:: 3 Programmers
projectTeam:: 2 Artists
projectTeam:: 1 Game Designer
projectWorkRole:: Lead Programmer
projectWorkDescSmall:: Developed essential features, behaviours, and AI for enemies.
projectWorkDescSmall:: Optimized code usage/readability and frametime/loadtime performance.
projectWorkDescLarge:: Developed essential features, behaviours, and AI for enemies.
projectWorkDescLarge:: Optimized code usage/readability and frametime/loadtime performance.
projectWorkDescLarge:: Merged GIT branches and solved merge conflicts.

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
* Used bitmask layers for physics layers
* Stored bullet damage in Box2D UserData
* Borderless Windowed code
* Contact Normals for ground detection
* Loading Screen
* Fix FPS physics speed dependency
## Source Code and Download:
https://youtu.be/F1dTUuymjTU
%%