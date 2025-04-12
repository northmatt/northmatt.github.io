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
app.fileManager.processFrontMatter(app.vault.getFileByPath(dv.current().file.path), (fm) => {
	fm.pageTitle = `${dv.page("Index").firstName}'s Portfolio - ${dv.current().projectNameOverride ? dv.current().projectNameOverride : dv.current().file.name}`;
});

dv.span("DataviewJS frontmatter manager here");
```
%%
# `$= app.plugins.plugins["templater-obsidian"].templater.current_functions_object.user.FormatMainHeader(dv) `
<cd><center>Profiles: [Github](https://github.com/northmatt) | [ItchIO](https://northmatt.itch.io)</center></cd>
## About Me
I'm a video game developer who has shipped `$= ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][dv.pages("#WebsitePage AND #Shipped").length]` games on ItchIO. My expertise is in systems, AI, and gameplay programming. However I've had experience in working with other parts of game development such as shader programming, level design, systems design, modeling, and texturing. 
## Project Links
```dataviewjs
dv.table(
	["", ""], 
	dv.pages("#WebsitePage AND #Project and -#Dataview/Exlude").sort(b => b.pageRank).map(b => [
		dv.parse(`[![${b.file.name}|250](${app.vault.getResourcePath(b.projectImgSmall)})](<${b.file.name}>)`),
		b.projectWorkDescSmall
	])
);
```


%%
## Skillsets
### Game Engines
```dataviewjs
var tpUser = app.plugins.plugins["templater-obsidian"].templater.current_functions_object.user;
dv.span(
	[...new Set(tpUser.FilterRename(dv.pages("#WebsitePage AND #Project and -#Dataview/Exlude").file.etags, "GameEngine").split(", "))]
);
```
### Languages
```dataviewjs
var tpUser = app.plugins.plugins["templater-obsidian"].templater.current_functions_object.user;
dv.span(
	[...new Set(tpUser.FilterRename(dv.pages("#WebsitePage AND #Project and -#Dataview/Exlude").file.etags, "Language").split(", "))]
);
```
### Tools
```dataviewjs
var tpUser = app.plugins.plugins["templater-obsidian"].templater.current_functions_object.user;
dv.span(
	[...new Set(tpUser.FilterRename(dv.pages("#WebsitePage AND #Project and -#Dataview/Exlude").file.etags, "DeveloperTool").split(", "))]
);
```
## Profiles
### Contact
Discord, Email, LinkedIn
## Platforms
Github, ItchIO, SketchFab?
%%