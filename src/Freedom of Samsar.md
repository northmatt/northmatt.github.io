---
title: Matthew's Portfolio - Freedom of Samsar
tags:
  - WebsitePage/Game
  - Project
  - Shipped
pageImg: "![[Freedom of Samsar Title.jpg]]"
pageDesc: |-
  There is too much FoS cheese. 
  What are doing with that cheeeese?
  The cheese is dangerous, give it to me so I can eat it. Dangerous cheese is good cheese. Not only can you use it for C4, but you can also use it for eating.
pageRank: 0
---
%%
dataviewjs thing here
``$= app.fileManager.processFrontMatter(app.vault.getFileByPath(dv.current().file.path), (fm) => { fm.title = `${dv.page("Index").firstName}'s Portfolio - ${dv.current().name ? dv.current().name : dv.current().file.name}`; } ); ``
%%
# ``$= `${dv.page("Index").firstName} ${dv.page("Index").lastName} - Portfolio - ${dv.current().name ? dv.current().name : dv.current().file.name}` ``
A game about killing monsters with a sword and powers.