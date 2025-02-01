---
title: Matthew's Portfolio - Mecha Mayhem
tags:
  - WebsitePage/Game
  - Project
  - Shipped
pageImg: "![[Mecha Mayhem Title.png]]"
pageDesc: |-
  There is too much MM cheese. 
  What are doing with thaaat cheese?
  The cheese is dangerous, give it to me so I can eat it.
pageRank: 4
---
%%
dataviewjs thing here
``$= app.fileManager.processFrontMatter(app.vault.getFileByPath(dv.current().file.path), (fm) => { fm.title = `${dv.page("Index").firstName}'s Portfolio - ${dv.current().name ? dv.current().name : dv.current().file.name}`; } ); ``
%%
# ``$= `${dv.page("Index").firstName} ${dv.page("Index").lastName} - Portfolio - ${dv.current().name ? dv.current().name : dv.current().file.name}` ``
A game about playing with friends and killing each other with robots.