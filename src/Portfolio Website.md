---
pageTitle: Matthew's Portfolio - Portfolio Website
---
%%
pageTags:: #WebsitePage #Project/Web #Skill/Language/JS #Skill/Language/HTML #Skill/Language/CSS #Skill/Language/YAML #Skill/Language/Markdown #Skill/DeveloperTool/Git/Client/GithubDesktop #Skill/DeveloperTool/Git/Client/Fork #Skill/DeveloperTool/Git/Forge/Github #Skill/DeveloperTool/Obsidian #Skill/DeveloperTool/Krita #Skill/Work/WebDesign 
pageRank:: 0
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
await dv.view("Views/ProcessFrontMatter")
```
%%
```dataviewjs
await dv.view("Views/FormatMainHeader")
```
`$= dv.current().projectImgLarge `
## Project Information

> [!Info] Description
> `$= dv.current().projectDesc `

`````col
````col-md
> [!Info] Timeline
> `$= await dv.view("Views/FormatHumanDate", [dv.current().projectDateStart, dv.current().projectDateEnd]) `
````

````col-md
> [!Info] Languages
> `$= await dv.view("Views/FilterRename", [dv.current().file.etags, "Language"]) `
````

````col-md
> [!Info] Team
> `$= [dv.current().projectTeam].flat().join("\n") `
````

````col-md
> [!Info] Links
> `$= await dv.view("Views/FilterRename", [dv.current().projectLink, "http"]) `
````
`````

## Roles and Responsibilities
```dataviewjs
dv.span(dv.current().projectWorkDescLarge)
```


%%
Modified `webpage-html-export.main.Webpage.AddTitle()`:
* Comment out "firstHeader.remove()" functions and "this.sizerElement.prepend(titleEl)" function.
* This stops the page's first header being replaced by the text in the title property.
Modified `webpage-html-export.main._MarkdownRendererInternal2.renderMarkdownView()`:
* Line after "await Promise.all(promises);" had "await new Promise(resolve => setTimeout(resolve, 100));" added
* This allows dataview queries to render

Using `<cd></cd>` HTML tag:
* Tags that dont exist allow for some markdown inside inline HTML code. Won't show up in editing view, only reading view and HTML exports.
* Useful for when human readable markdown formatting could be used rather than not so human readable HTML formatting.

Reduce font files (look at obsidian.css)
Disable loading screen
Horizontal navigation bar
Use [[Resource Images]] for giving #Skill thumbnails
Use [[Tag Display Override]] for replacing how a #Skill is displayed textually
CSS buttons for links
Picture slides for project pages
Show projectWorkRole under Roles and Responsibilities
Add Fruit Punch Drunk Rush, PC builds

[Obsidian API](https://docs.obsidian.md/Home)
[Dataview API](https://blacksmithgu.github.io/obsidian-dataview)
[Luxon API](https://moment.github.io/luxon/api-docs/index.html)

`app.metadataCache.getCache(dv.current().file.path).frontmatter`
`app.plugins.plugins["templater-obsidian"].templater.current_functions_object.user`
`app.plugins.plugins.dataview.api.luxon`
%%