---
pageTitle: Matthew's Portfolio - Flappy ML
---
%%
pageTags:: #WebsitePage #Project/TechPreview #Skill/Language/CS #Skill/Language/Python #Skill/Language/YAML #Skill/Environment/Anaconda #Skill/PackageManager/PIP #Skill/GameEngine/Unity #Skill/LibraryFramework/PyTorch #Skill/LibraryFramework/UnityMLAgents #Skill/DeveloperTool/Git/Client/GithubDesktop #Skill/DeveloperTool/Git/Forge/Github #Skill/DeveloperTool/VisualStudio #Skill/Work/Programmer/AI #Skill/Work/Programmer/GameMechanic 
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
projectWorkDescSmall:: Trained a neural network with reinforcement learning.
projectWorkDescSmall:: Used PyTorch with CUDA for training the network.
projectWorkDescLarge:: Trained a neural network with reinforcement learning to play the game and compete with the player.
projectWorkDescLarge:: Used PyTorch with CUDA and Unity ML Agents libraries for training the network.
projectWorkDescLarge:: Used Tensorboard for viewing realtime training information.

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


%%
Hmm
%%