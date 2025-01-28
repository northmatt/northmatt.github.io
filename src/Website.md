---
title: Matthew's Portfolio - Website
tags:
  - WebsitePage
  - Project
pageImg: https://forum.obsidian.md/uploads/default/original/3X/4/4/44afcb0e6d173ace73a4a8288b5af791b93d4b0a.png
pageDesc: |-
  - There is too much W cheese. 
  - Whaaaat are doing with that cheese?
  - The cheese is dangerous, give it to me so I can eat it.
pageRank: "9"
---
# <center>Matthew North - Portfolio - Website</center>

I created the site in [Obsidian](https://obsidian.md) and the repo can be found [here](https://github.com/northmatt/northmatt.github.io).

%%
Modified `webpage-html-export.main.Webpage.AddTitle()`:
* Code block with output log "Replacing {firstHeaderText} header because it was H1 at the top of the page" now does the same as the code block with output log "Using {firstHeaderText} header as title because it was H1 at the top of the page". This stops the page's first header being replaced by the text in the title property when the former code block is executed.
* Useful when file name isnt suitable to be used (ex: index.html), when first header is a more descriptive and longer name than the title, and/or when first header has formatting.
Modified `webpage-html-export.main._MarkdownRendererInternal2.renderMarkdownView()`:
* Line after "await Promise.all(promises);" had "await new Promise(resolve => setTimeout(resolve, 100));" added

Using `<CD></CD>` HTML tag:
* Tags that dont exist allow for some markdown inside inline HTML code. Won't show up in editing view, only reading view and HTML exports.
* Useful for when human readable markdown formatting could be used rather than not so human readable HTML formatting.

function renderMarkdownView > preview.postProcess
function renderSimpleMarkdown > import_obsidian8.MarkdownRenderer.render
function renderCompactMarkdown > obsidian.MarkdownRenderer.render
%%