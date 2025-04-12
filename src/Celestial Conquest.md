---
pageTitle: Matthew's Portfolio - Celestial Conquest
---
%%
pageTags:: #WebsitePage #Project/Game #Shipped #Skill/Language/CS #Skill/GameEngine/Unity #Skill/DeveloperTool/Github #Skill/DeveloperTool/VisualStudio 
pageRank:: 20
projectName:: `$= dv.current().projectNameOverride ? dv.current().projectNameOverride : dv.current().file.name `
projectNameOverride:: 
projectImgSmall:: ![[Celestial Conquest Title.avif]]
projectImgLarge:: ![[Celestial Conquest Title.avif]]
projectLink:: https://github.com/LuminousAme/Project-Stellar-Strategy
projectLink:: https://amelumineux.itch.io/celestial-conquest
projectDateStart:: 2023-04-03
projectDateEnd:: 2023-04-05
projectDesc:: Celestial Conquest is a 3D real time strategy style game game. Take to the stars as you fight to conquer and subjugate rival civilizations in your solar system. Mine resources to build ships and weapons. Command your fleets to assault enemy battle stations and defend your own. Dominate your celestial neighbours in this single-player real-time strategy game with a dynamic, procedural, and revolving map.
projectOrganization:: Atlas X
projectTeam:: 2 Programmers
projectTeam:: 2 Generalists
projectWorkRole:: AI Programmer
projectWorkDescSmall:: Developed essential features, behaviours, and AI for enemies.
projectWorkDescSmall:: Designed enemy AI and their dynamic behaviours between the player and enemy factions.
projectWorkDescLarge:: Developed essential features, behaviours, and AI for enemies.
projectWorkDescLarge:: Designed enemy AI and their dynamic behaviours between the player and enemy factions.

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
AI has alignment for being more aggressive
AI sends amt of miners to not be wasteful from planet resource generation speed
AI doesnt buy more miners when solar system resource generation cap is met
AI Factions
AI decisions are more quickly made as time goes on (curve based on time)
Fixed small bugs



alignmentRandomFlipCurve, X is alignment, Y is chance to flip decisionDifficultyCurve, X is minute time, Y is number to divide decisionTime by distanceResourceThresholdCurve, X is distance from station to planet, Y is resource threshold needed to send extractor defenseAttackCurve, X is amt of destroyer units that AI has access to, Y is amt to send for attack alignmentAttackCurve, X is alignment, Y is threshold of desiredShipUnitsToAttack/enemyShipUnitsInDefense --- desiredShipUnitsToAttack is just defenseAttackCurve(X)

When to build what ship types - maxExtractorCount Where to send mining probes - distanceResourceThresholdCurve How many probes to send - maxExtractorCount per planet When it has enough ships defending it that it launches an attack - defenseAttackCurve, alignmentAttackCurve, alignment How many ships it wants to launch in an attack - defenseAttackCurve How it picks attack targets - nothing changed, just picks closest target. Would be nice if it targets faction that angers it most or weakest faction, but idk. Also big issue that it cant target destroyer units orbiting other planets, which player can cheese for stopping AI factions from mining on that planet
## Source Code and Download:
https://youtu.be/n6ai6rsj7jg
%%