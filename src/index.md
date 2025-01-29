---
title: Matthew's Portfolio - Home
tags:
  - WebsitePage/Home
---
# <center>Matthew North - Portfolio - Home</center>
<cd><center>Profiles: [Github](https://github.com/northmatt) | [ItchIO](https://northmatt.itch.io)</center></cd>
## About Me
I'm a video game developer who has shipped `$= ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][dv.pages("#WebsitePage AND #Shipped").length]` games on ItchIO. My expertise is in programming however I have had experience in working with other parts of game development such as level design, modeling, texturing, ***ETC**.* 
## Projects
```dataviewjs
dv.table(
	["", ""], 
	dv.pages("#WebsitePage AND #Project").sort(b => b.pageRank).map(b => [
		dv.parse(`[![${b.file.name}|200](${app.vault.getResourcePath(b.pageImg)})](<${b.file.name}>)`),
		b.pageDesc.split("\n")
	])
);
```
