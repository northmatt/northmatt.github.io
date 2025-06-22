---
pageTitle: Matthew's Portfolio - Freedom of Samsar
---
%%
pageTags:: #WebsitePage #Project/Game #Shipped #Skill/Language/CS #Skill/Language/gdScript #Skill/Language/GSL #Skill/GameEngine/Godot #Skill/DeveloperTool/Git/Client/GithubDesktop #Skill/DeveloperTool/Git/Forge/Github #Skill/DeveloperTool/VisualStudio #Skill/DeveloperTool/Blender #Skill/DeveloperTool/Maya #Skill/DeveloperTool/SubstanceDesigner #Skill/DeveloperTool/OBS #Skill/DeveloperTool/DavinciResolve #Skill/Work/Programmer/GameMechanic #Skill/Work/Programmer/Backend #Skill/Work/Programmer/Shader #Skill/Work/Programmer/AI #Skill/Work/Programmer/DeveloperTool #Skill/Work/Artist/Texture #Skill/Work/Artist/Model 
pageRank:: 0
projectName:: `$= dv.current().projectNameOverride ? dv.current().projectNameOverride : dv.current().file.name `
projectNameOverride:: 
projectImgSmall:: ![[Freedom of Samsar Title.avif]]
projectImgLarge:: ![[Freedom of Samsar Title.avif]]
projectLink:: https://terpacey.itch.io/freedom-of-samsar
projectDateStart:: 2023-09-01
projectDateEnd:: 2024-04-01
projectDesc:: Freedom of Samsar is a 3D action style game. Start out your adventure in a city abandoned of humans. Finding a strange and ancient knife that vibrates with a strong energy, you feel yourself become stronger when you hold it. Fight your way through the city of monsters. Navigate through different areas to unlock your true potential and see how powerful you'll become.
projectOrganization:: Mispronouncer's Ink
projectTeam:: 2 Programmers
projectTeam:: 1 Artist
projectTeam:: 1 Game Designer
projectWorkRole:: Lead Programmer
projectWorkDescSmall:: Developed AI, shaders, state machines, status effects, attribute systems, and other features essential to the game.
projectWorkDescSmall:: Developed textures and modified existing models and UV maps.
projectWorkDescLarge:: Developed shaders, enemy AI, DFAs/UFAs (state machines), character status effects, attribute systems, renderdoc plugin, and various other features essential to the game.
projectWorkDescLarge:: Developed textures for models and modified existing models and UV maps.
projectWorkDescLarge:: Helped troubleshoot issues with unsupported GLTF model exports from Maya.

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
> [!Info] Engine & Languages
> `$= await dv.view("Views/FilterRename", [dv.current().file.etags, "GameEngine"]) `
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

## Work Description
```dataviewjs
dv.span(dv.current().projectWorkDescLarge)
```


%%
https://youtu.be/Nz0D42pVm0w
Hmm
%%