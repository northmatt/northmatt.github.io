---
tags:
  - WebsitePage
  - Project/TechPreview
  - Skill/Language/CS
  - Skill/GameEngine/Unity
  - Skill/DeveloperTool/Github
  - Skill/DeveloperTool/VisualStudio
pageTitle: Matthew's Portfolio - Multiplayer Game Tech Preview
pageImg: "![[Multiplayer Demo Title.png]]"
pageDesc: |-
  Implemented networking via C# NET sockets.
  Implemented a chat system, a lobby system, the ability to support up to 255 clients at a time.
  Implemented predictive movement with dead reckoning.
pageRank: 12
projectDateStart: 2023-03-25
projectDateEnd: 2023-04-01
projectTeam: 1 Programmer
projectRole: Lead Programmer
projectDesc: A tech preview about multiplayer.
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
`${dv.current().projectDateStart.toFormat("MMM y")} - ${dv.current().projectDateEnd.toFormat("MMM y")}, ${dv.current().projectDateEnd.diff(dv.current().projectDateStart, "weeks").toHuman()}`.split(", ")
]])
```
## Game Description
* `$= dv.current().projectDesc`


%%

Hmm
%%