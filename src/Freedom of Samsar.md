---
tags:
  - WebsitePage
  - Project/Game
  - Shipped
  - Skill/Language/CS
  - Skill/Language/gdScript
  - Skill/GameEngine/Godot
  - Skill/DeveloperTool/Github
  - Skill/DeveloperTool/VisualStudio
  - Skill/DeveloperTool/Blender
  - Skill/DeveloperTool/Maya
  - Skill/DeveloperTool/SubstanceDesigner
  - Skill/DeveloperTool/OBS
  - Skill/DeveloperTool/DavinciResolve
pageTitle: Matthew's Portfolio - Freedom of Samsar
pageImg: "![[Freedom of Samsar Title.jpg]]"
pageDesc: |-
  Developed shaders, enemy AI, DFAs/UFAs (state machines), character status effects, attribute systems, renderdoc plugin, and various other features essential to the game.
  Helped troubleshoot issues with unsupported GLTF model exports from Maya.
  Created textures for models and modified existing models and UV maps.
pageRank: 0
projectDateStart: 2023-09-01
projectDateEnd: 2024-04-01
projectTeam: |-
  2 Programmers
  1 Artist
  1 Game Designer
projectRole: Lead Programmer
projectDesc: A game about killing monsters with a sword and powers.
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
https://terpacey.itch.io/freedom-of-samsar
https://youtu.be/Nz0D42pVm0w
Hmm
%%