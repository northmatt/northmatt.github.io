---
tags:
  - WebsitePage
  - Project/Game
  - Shipped
  - Skill/Language/CPP
  - Skill/GameEngine/CustomOpenGL
  - Skill/LibraryFramework/Box2D
  - Skill/LibraryFramework/FMOD
  - Skill/DeveloperTool/Github
  - Skill/DeveloperTool/VisualStudio
pageTitle: Matthew's Portfolio - Barotrauma
pageImg: "![[Barotrauma Title.png]]"
pageDesc: |-
  Developed essential features, behaviours, and AI for enemies.
  Optimized code usage/readability and frametime/loadtime performance.
  Merged GIT branches and solved merge conflicts.
pageRank: 8
projectDateStart: 2020-01-01
projectDateEnd: 2020-04-01
projectTeam: |-
  3 Programmers
  2 Artists
  1 Game Designer
projectRole: Lead Programmer
projectDesc: 2D metroidvania with special suit upgrades and killing enemies.
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
`$= dv.current().projectDesc`


%%
* Used bitmask layers for physics layers
* Stored bullet damage in Box2D UserData
* Borderless Windowed code
* Contact Normals for ground detection
* Loading Screen
* Fix FPS physics speed dependency
## Source Code and Download:
[https://github.com/Jonathan-Jay/JayPEG](https://github.com/Jonathan-Jay/JayPEG)
https://jjthething.itch.io/barotrauma
https://youtu.be/F1dTUuymjTU
%%