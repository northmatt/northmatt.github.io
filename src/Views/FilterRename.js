/**
 * Filter text from a tag array and rename them for readability
 */
function filter_rename(text_array, text_filter, text_join) {
	if (typeof text_array == "string") {
		text_array = [text_array];
	}
	
	if (typeof text_array != "object" || text_array == null  || typeof text_filter != "string") {
		return "";
	}
	
	var filtered_text = text_array.filter(a => a.contains(text_filter));
	var joinText = "";
	
	switch (text_filter) {
		case "GameEngine":
			filtered_text = filtered_text.map(a => a.split("/")[2].replace("CustomOpenGL", "Custom OpenGL Engine"));
			joinText = ", ";
			break;
		case "Language":
			filtered_text = filtered_text.map(a => a.split("/")[2].replace("CPP", "C++").replace(/CS$/, "C#"));
			joinText = ", ";
			break;
		case "DeveloperTool":
			filtered_text = filtered_text.map(a => a.split("/")[2].replace("VisualStudio", "Visual Studio").replace("SubstanceDesigner", "Substance Designer").replace("DavinciResolve", "Davinci Resolve"));
			joinText = ", ";
			break;
		case "http":
			filtered_text = filtered_text.map(a => `[View on ${a.split("/")[2].split(".").at(-2).replace("github", "Github").replace("itch", "ItchIO")}](${a})`);
			joinText = "\n";
			break;
		default:
			break;
	}
	
	filtered_text = [...new Set(filtered_text)];
	
	if (text_join != null)
		joinText = text_join;
	
	if (joinText != "")
		filtered_text = filtered_text.join(joinText);
	
    return filtered_text;
}

return filter_rename(input[0], input[1], (input.length > 2 ? input[2] : null));