---
pageTitle: Matthew's Portfolio - Home
---
%%
pageTags:: #WebsitePage 
projectName:: `$= dv.current().projectNameOverride ? dv.current().projectNameOverride : dv.current().file.name `
projectNameOverride:: Home
firstName:: Matthew
lastName:: North

```dataviewjs
await dv.view("Views/ProcessFrontMatter")
```
%%
```dataviewjs
await dv.view("Views/FormatMainHeader")
```
<cd><center>Profiles: [Github](https://github.com/northmatt) | [ItchIO](https://northmatt.itch.io)</center></cd>
## About Me
I'm a video game developer who has shipped `$= ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][dv.pages("#WebsitePage AND #Shipped").length]` games on ItchIO. My expertise is in systems, AI, and gameplay programming. However I've had experience in working with other parts of game development such as shader programming, level design, systems design, modeling, and texturing. 
## Project Links
### Games
```datacards
TABLE join(projectWorkDescSmall, "
") as Desc, projectImgSmall FROM #WebsitePage and #Project/Game and -#Dataview/Exlude
SORT pageRank

// Settings
preset: portrait
imageProperty: projectImgSmall
imageFit: contain
showLabels: false
//enableClickableCards: true
```
### Game Tech Demos
```datacards
TABLE join(projectWorkDescSmall, "
") as Desc, projectImgSmall FROM #WebsitePage and #Project/TechPreview and -#Dataview/Exlude
SORT pageRank

// Settings
preset: portrait
imageProperty: projectImgSmall
imageFit: contain
showLabels: false
//enableClickableCards: true
```
### Web
```datacards
TABLE join(projectWorkDescSmall, "
") as Desc, projectImgSmall FROM #WebsitePage and #Project/Web and -#Dataview/Exlude
SORT pageRank

// Settings
preset: portrait
imageProperty: projectImgSmall
imageFit: contain
showLabels: false
//enableClickableCards: true
```


%%
## Skillsets
### Game Engines
```dataviewjs
await dv.view("Views/FilterRename", [dv.pages("#WebsitePage and #Project and -#Dataview/Exlude").file.etags, "GameEngine", ""])
```
### Languages
```dataviewjs
await dv.view("Views/FilterRename", [dv.pages("#WebsitePage and #Project and -#Dataview/Exlude").file.etags, "Language", ""])
```
### Tools
```dataviewjs
await dv.view("Views/FilterRename", [dv.pages("#WebsitePage and #Project and -#Dataview/Exlude").file.etags, "DeveloperTool", ""])
```
## Profiles
### Contact
Discord, Email, LinkedIn
## Platforms
Github, ItchIO, SketchFab?
%%