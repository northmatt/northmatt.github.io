---
tags:
  - WebsitePage
  - Project/Game
  - Shipped
  - Skill/Language/CS
  - Skill/GameEngine/Unity
  - Skill/DeveloperTool/Github
  - Skill/DeveloperTool/VisualStudio
pageTitle: Matthew's Portfolio - Table Fable
pageImg: "![[Table Fable Title.png]]"
pageDesc: |-
  Designed and developed interactive animations for cards and particle animations for ambient objects.
  Developed essential features for card interaction in 3D world and for spectating.
pageRank: 6
projectDateStart: 2022-01-01
projectDateEnd: 2022-04-01
projectTeam: |-
  2 Programmers
  2 Artists
  1 Game Designer
  1 Audio Engineer
projectRole: Programmer
projectDesc: PvP card game with local/online multiplayer.
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
Candle animation
Card handsplay animation
Volume control
Worldspace cursor
Spectator Controller

https://github.com/Jonathan-Jay/Card-Game
https://jjthething.itch.io/table-fable
https://youtu.be/vwXxnK0DSIo
%%