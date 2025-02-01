---
title: Matthew's Portfolio - Celestial Conquest
tags:
  - WebsitePage/Game
  - Project
  - Shipped
pageImg: "![[Celestial Conquest Title.png]]"
pageDesc: |-
  There is too much CC cheese. 
  What are doing with that cheeseeee?
  The cheese is dangerous, give itttt to me so I can eat it.
pageRank: 2
---
%%
dataviewjs thing here
``$= app.fileManager.processFrontMatter(app.vault.getFileByPath(dv.current().file.path), (fm) => { fm.title = `${dv.page("Index").firstName}'s Portfolio - ${dv.current().name ? dv.current().name : dv.current().file.name}`; } ); ``
%%
# ``$= `${dv.page("Index").firstName} ${dv.page("Index").lastName} - Portfolio - ${dv.current().name ? dv.current().name : dv.current().file.name}` ``
A game about killing a space station with space ships, resources, and strategy.