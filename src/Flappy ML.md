---
pageTitle: Matthew's Portfolio - Flappy ML
---
%%
pageTags:: #WebsitePage #Project/TechPreview #Skill/Language/CS #Skill/GameEngine/Unity #Skill/LibraryFramework/PyTorch #Skill/LibraryFramework/UnityMLAgents #Skill/DeveloperTool/Github #Skill/DeveloperTool/VisualStudio
pageRank:: 120
projectName:: `$= dv.current().projectNameOverride ? dv.current().projectNameOverride : dv.current().file.name `
projectNameOverride:: 
projectImgSmall:: ![[Flappy ML Title.avif]]
projectImgLarge:: ![[Flappy ML Title.avif]]
projectLink:: https://github.com/northmatt/INFR4320U-Final
projectDateStart:: 2023-04-01
projectDateEnd:: 2023-04-06
projectDesc:: Flappy ML is a tech preview for machine learning. A neural network was trained to play a Flappy Bird spin off game and you are suppose to try and defeat it.
projectOrganization:: 
projectTeam:: None
projectWorkRole:: Lead Programmer
projectWorkDescSmall:: Trained a neural network with reinforcement learning to play the game and compete with the player.
projectWorkDescSmall:: Used PyTorch with CUDA and Unity ML Agents libraries for training the network.
projectWorkDescLarge:: Trained a neural network with reinforcement learning to play the game and compete with the player.
projectWorkDescLarge:: Used PyTorch with CUDA and Unity ML Agents libraries for training the network.
projectWorkDescLarge:: Used Tensorboard for viewing realtime training information.

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