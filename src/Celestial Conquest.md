---
tags:
  - WebsitePage
  - Project/Game
  - Shipped
  - Skill/Language/CS
  - Skill/GameEngine/Unity
  - Skill/DeveloperTool/Github
  - Skill/DeveloperTool/VisualStudio
pageTitle: Matthew's Portfolio - Celestial Conquest
pageImg: "![[Celestial Conquest Title.png]]"
pageDesc: |-
  Developed essential features, behaviours, and AI for enemies.
  Designed enemy AI and their dynamic behaviours.
pageRank: 2
projectDateStart: 2023-04-03
projectDateEnd: 2023-04-05
projectTeam: |-
  2 Programmers
  2 Generalists
projectRole: AI Programmer
projectDesc: Real Time Strategy set in a solar system setting where you destroy another space station with space ships, resources, and strategy.
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
`${dv.current().projectDateStart.toFormat("MMM y")} - ${dv.current().projectDateEnd.toFormat("MMM y")}, ${dv.current().projectDateEnd.diff(dv.current().projectDateStart, "days").toHuman()}`.split(", ")
]])
```
## Game Description
* `$= dv.current().projectDesc`


%%
AI has alignment for being more aggressive
AI sends amt of miners to not be wasteful from planet resource generation speed
AI doesnt buy more miners when solar system resource generation cap is met
AI Factions
AI decisions are more quickly made as time goes on (curve based on time)
Fixed small bugs



alignmentRandomFlipCurve, X is alignment, Y is chance to flip decisionDifficultyCurve, X is minute time, Y is number to divide decisionTime by distanceResourceThresholdCurve, X is distance from station to planet, Y is resource threshold needed to send extractor defenseAttackCurve, X is amt of destroyer units that AI has access to, Y is amt to send for attack alignmentAttackCurve, X is alignment, Y is threshold of desiredShipUnitsToAttack/enemyShipUnitsInDefense --- desiredShipUnitsToAttack is just defenseAttackCurve(X)

When to build what ship types - maxExtractorCount Where to send mining probes - distanceResourceThresholdCurve How many probes to send - maxExtractorCount per planet When it has enough ships defending it that it launches an attack - defenseAttackCurve, alignmentAttackCurve, alignment How many ships it wants to launch in an attack - defenseAttackCurve How it picks attack targets - nothing changed, just picks closest target. Would be nice if it targets faction that angers it most or weakest faction, but idk. Also big issue that it cant target destroyer units orbiting other planets, which player can cheese for stopping AI factions from mining on that planet
## Source Code and Download:
[https://github.com/LuminousAme/Project-Stellar-Strategy](https://github.com/LuminousAme/Project-Stellar-Strategy)
https://amelumineux.itch.io/celestial-conquest
https://youtu.be/n6ai6rsj7jg
%%