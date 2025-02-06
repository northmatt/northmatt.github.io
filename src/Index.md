---
tags:
  - WebsitePage
pageTitle: Matthew's Portfolio - Index
pageName: Home
firstName: Matthew
lastName: North
---
%%
dataviewjs thing here
``$= app.fileManager.processFrontMatter(app.vault.getFileByPath(dv.current().file.path), (fm) => { fm.pageTitle = `${dv.page("Index").firstName}'s Portfolio - ${dv.current().name ? dv.current().name : dv.current().file.name}`; } ); ``
%%
# ``$= `${dv.page("Index").firstName} ${dv.page("Index").lastName} - Portfolio - ${dv.current().pageName ? dv.current().pageName : dv.current().file.name}` ``
<cd><center>Profiles: [Github](https://github.com/northmatt) | [ItchIO](https://northmatt.itch.io)</center></cd>
## About Me
I'm a video game developer who has shipped `$= ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][dv.pages("#WebsitePage AND #Shipped").length]` games on ItchIO. My expertise is in programming however I have had experience in working with other parts of game development such as level design, modeling, texturing, ***ETC***. 
## Project Links
```dataviewjs
dv.table(
	["", ""], 
	dv.pages("#WebsitePage AND #Project and -#Dataview/Exlude").sort(b => b.pageRank).map(b => [
		dv.parse(`[![${b.file.name}|200](${app.vault.getResourcePath(b.pageImg)})](<${b.file.name}>)`),
		b.pageDesc.split("\n")
	])
);
```
