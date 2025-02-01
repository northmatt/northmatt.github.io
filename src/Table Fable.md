---
title: Matthew's Portfolio - Table Fable
tags:
  - WebsitePage/Game
  - Project
  - Shipped
pageImg: "![[Table Fable Title.png]]"
pageDesc: |-
  There is too much TF cheese. 
  What are doingggg with that cheese?
  The cheese is dangerous, give it to me so I can eat it.
pageRank: 6
---
%%
dataviewjs thing here
``$= app.fileManager.processFrontMatter(app.vault.getFileByPath(dv.current().file.path), (fm) => { fm.title = `${dv.page("Index").firstName}'s Portfolio - ${dv.current().name ? dv.current().name : dv.current().file.name}`; } ); ``
%%
# ``$= `${dv.page("Index").firstName} ${dv.page("Index").lastName} - Portfolio - ${dv.current().name ? dv.current().name : dv.current().file.name}` ``
A game about cards.