---
pageTitle: Matthew's Portfolio - Barotrauma
---
%%
pageTags:: #WebsitePage  #Project/Game  #Shipped  #Skill/Language/CPP  #Skill/GameEngine/CustomOpenGL  #Skill/LibraryFramework/Box2D  #Skill/LibraryFramework/FMOD #Skill/DeveloperTool/Github #Skill/DeveloperTool/VisualStudio
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
* Used bitmask layers for physics layers
* Stored bullet damage in Box2D UserData
* Borderless Windowed code
* Contact Normals for ground detection
* Loading Screen
* Fix FPS physics speed dependency
## Source Code and Download:
https://youtu.be/F1dTUuymjTU
%%