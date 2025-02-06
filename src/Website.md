---
tags:
  - WebsitePage
  - Project/Website
  - Skill/Language/HTML
  - Skill/Language/CSS
  - Skill/Language/YAML
  - Skill/Language/Markdown
  - Skill/DeveloperTool/Github
  - Skill/DeveloperTool/Obsidian
  - Skill/DeveloperTool/Krita
pageTitle: Matthew's Portfolio - Website
pageImg: "![[Website Portfolio.png]]"
pageDesc: |-
  Developed website in a database like structure.
  Modified existing JS libraries for essential formatting fixes.
pageRank: 10
projectDateStart: 2025-01-01
projectDateEnd: 2025-02-01
projectTeam: 1 Developer
projectRole: Lead Developer
projectDesc: Created the site in [Obsidian](https://obsidian.md) and the repo can be found [here](https://github.com/northmatt/northmatt.github.io).
---
%%
dataviewjs thing here
``$= app.fileManager.processFrontMatter(app.vault.getFileByPath(dv.current().file.path), (fm) => { fm.pageTitle = `${dv.page("Index").firstName}'s Portfolio - ${dv.current().name ? dv.current().name : dv.current().file.name}`; } ); ``
%%
# ``$= `${dv.page("Index").firstName} ${dv.page("Index").lastName} - Portfolio - ${dv.current().pageName ? dv.current().pageName : dv.current().file.name}` ``
```dataviewjs
dv.table(["Language", "Team", "Role", "Timeline"], [[
dv.current().tags.filter(a => a.contains("Language")).map(a => a.split("/")[2].replace("CPP", "C++")),
dv.current().projectTeam.split("\n"),
[dv.current().projectRole],
`${dv.current().projectDateStart.toFormat("MMM y")} - ${dv.current().projectDateEnd.toFormat("MMM y")}, ${dv.current().projectDateEnd.diff(dv.current().projectDateStart, "months").toHuman()}`.split(", ")
]])
```
## Project Description
* `$= dv.current().projectDesc`


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
Use Column Markdown plugin instead of dataview for project pages
Project Links
Horizontal navigation bar
Templater for updating front matter

https://blacksmithgu.github.io/obsidian-dataview
https://docs.obsidian.md/Home

`app.metadataCache.getCache(dv.current().file.path).frontmatter`
%%