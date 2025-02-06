---
tags:
  - WebsitePage
  - Project/Game
  - Shipped
  - Skill/Language/CPP
  - Skill/GameEngine/CustomOpenGL
  - Skill/LibraryFramework/Bullet3
  - Skill/LibraryFramework/FMOD
  - Skill/DeveloperTool/Github
  - Skill/DeveloperTool/VisualStudio
pageTitle: Matthew's Portfolio - Mecha Mayhem
pageImg: "![[Mecha Mayhem Title.png]]"
pageDesc: |-
  Developed and optimized essential GLSL shaders and rendering backend.
  Developed essential backend for managing scenes.
  Merged GIT branches and solved merge conflicts.
pageRank: 4
projectDateStart: 2020-09-01
projectDateEnd: 2021-04-01
projectTeam: |-
  3 Programmers
  2 Artists
  1 Game Designer
projectRole: Programmer
projectDesc: Free for all robot brawler in 3rd person with splitscreen multiplayer.
---
%%
dataviewjs thing here
``$= app.fileManager.processFrontMatter(app.vault.getFileByPath(dv.current().file.path), (fm) => { fm.pageTitle = `${dv.page("Index").firstName}'s Portfolio - ${dv.current().name ? dv.current().name : dv.current().file.name}`; } ); ``
%%
# ``$= `${dv.page("Index").firstName} ${dv.page("Index").lastName} - Portfolio - ${dv.current().pageName ? dv.current().pageName : dv.current().file.name}` ``
```dataviewjs
dv.table(["Engine", "Team", "Role", "Timeline"], [[
[
	dv.current().tags.filter(a => a.contains("GameEngine")).map(a => a.split("/")[2].replace("CustomOpenGL", "Custom OpenGL Engine")).join(", "),
	dv.current().tags.filter(a => a.contains("Language")).map(a => a.split("/")[2].replace("CPP", "C++").replace("CS", "C#")).join(", ")
],
dv.current().projectTeam.split("\n"),
[dv.current().projectRole],
`${dv.current().projectDateStart.toFormat("MMM y")} - ${dv.current().projectDateEnd.toFormat("MMM y")}, ${dv.current().projectDateEnd.diff(dv.current().projectDateStart, "months").toHuman()}`.split(", ")
]])
```
## Game Description
* `$= dv.current().projectDesc`


%%
* Scene Manager with QueueSceneChange
* GLSL Shader and OpenGL backend binding optimization
* Awarded for Best Tech during Ontario Tech University’s Gamecon 2021

## Source Code and Download:
[https://github.com/Jonathan-Jay/Mecha-Mayhem](https://github.com/Jonathan-Jay/Mecha-Mayhem)
https://jjthething.itch.io/mm-demo
https://youtu.be/pFOknjEUpP0
%%