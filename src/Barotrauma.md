---
title: Matthew's Portfolio - Barotrauma
tags:
  - WebsitePage/Game
  - Project
  - Shipped
pageImg: "![[Barotrauma Title.png]]"
pageDesc: |-
  There is too much B cheese. 
  What arrrre doing with that cheese?
  The cheese is dangerous, give it to me so I can eat it.
pageRank: 8
---
%%
dataviewjs thing here
``$= app.fileManager.processFrontMatter(app.vault.getFileByPath(dv.current().file.path), (fm) => { fm.title = `${dv.page("Index").firstName}'s Portfolio - ${dv.current().name ? dv.current().name : dv.current().file.name}`; } ); ``
%%
# ``$= `${dv.page("Index").firstName} ${dv.page("Index").lastName} - Portfolio - ${dv.current().name ? dv.current().name : dv.current().file.name}` ``
A game about backtracking with special suit upgrades and killing enemies.