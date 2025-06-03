---
pageTitle: Matthew's Portfolio - Portfolio Website
---
%%
pageTags:: #WebsitePage #Project/Website #Skill/Language/HTML #Skill/Language/CSS #Skill/Language/YAML #Skill/Language/Markdown #Skill/DeveloperTool/Github #Skill/DeveloperTool/Obsidian #Skill/DeveloperTool/Krita #Skill/Work/WebDesign 
pageRank:: 100
projectName:: `$= dv.current().projectNameOverride ? dv.current().projectNameOverride : dv.current().file.name `
projectNameOverride:: 
projectImgSmall:: ![[Portfolio Website.avif]]
projectImgLarge:: ![[Portfolio Website.avif]]
projectLink:: https://github.com/northmatt/northmatt.github.io
projectDateStart:: 2025-01-01
projectDateEnd:: Current
projectDesc:: This portfolio site was created in [Obsidian](https://obsidian.md).
projectOrganization:: 
projectTeam:: None
projectWorkRole:: Lead Developer
projectWorkDescSmall:: Developed website around a database oriented design.
projectWorkDescSmall:: Modified existing JS libraries for essential formatting fixes.
projectWorkDescLarge:: Developed website around a database oriented design.
projectWorkDescLarge:: Modified existing JS libraries for essential formatting fixes.

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
> [!Info] Languages
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
Modified `webpage-html-export.main.Webpage.AddTitle()`:
* Code block with output log "Replacing {firstHeaderText} header because it was H1 at the top of the page" now does the same as the code block with output log "Using {firstHeaderText} header as title because it was H1 at the top of the page". This stops the page's first header being replaced by the text in the title property when the former code block is executed.
* Useful when file name isnt suitable to be used (ex: index.html), when first header is a more descriptive and longer name than the title, and/or when first header has formatting.
Modified `webpage-html-export.main._MarkdownRendererInternal2.renderMarkdownView()`:
* Line after "await Promise.all(promises);" had "await new Promise(resolve => setTimeout(resolve, 100));" added

Using `<CD></CD>` HTML tag:
* Tags that dont exist allow for some markdown inside inline HTML code. Won't show up in editing view, only reading view and HTML exports.
* Useful for when human readable markdown formatting could be used rather than not so human readable HTML formatting.

Reduce font files (look at obsidian.css)
Horizontal navigation bar
Disable loading screen
Use [[Resource Images]] for giving #Skill thumbnails
Use [[Tag Display Override]] for replacing how a #Skill is displayed textually
Add Other/Networking skill to [[Table Fable]] and [[Multiplayer Tech Demo]] 
CSS buttons for links
Picture slides for project pages
Project list in gridview (https://www.reddit.com/r/ObsidianMD/comments/1iyr0d5) or (https://forum.obsidian.md/t/85808)
Show projectWorkRole under work description


https://blacksmithgu.github.io/obsidian-dataview
https://docs.obsidian.md/Home
https://moment.github.io/luxon/api-docs/index.html

`app.metadataCache.getCache(dv.current().file.path).frontmatter`
`app.plugins.plugins["templater-obsidian"].templater.current_functions_object.user`
`app.plugins.plugins.dataview.api.luxon`
%%