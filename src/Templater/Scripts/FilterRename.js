/**
 * Filter text from a tag array and rename them for readability
 */
function filter_rename(text_array, text_filter) {
	if (typeof text_array == "string") {
		text_array = [text_array];
	}
	
	if (typeof text_array != "object" || text_array == null  || typeof text_filter != "string") {
		return "";
	}
	
	console.log(text_array);
	
	var filtered_text = text_array.filter(a => a.contains(text_filter));
	
	switch (text_filter) {
		case "GameEngine":
			filtered_text = filtered_text.map(a => a.split("/")[2].replace("CustomOpenGL", "Custom OpenGL Engine"));
			break;
		case "Language":
			filtered_text = filtered_text.map(a => a.split("/")[2].replace("CPP", "C++").replace(/CS$/, "C#"));
			break;
		case "DeveloperTool":
			filtered_text = filtered_text.map(a => a.split("/")[2].replace("VisualStudio", "Visual Studio").replace("SubstanceDesigner", "Substance Designer").replace("DavinciResolve", "Davinci Resolve"));
			break;
		case "http":
			filtered_text = filtered_text.map(a => `[View on ${a.split("/")[2].split(".").at(-2).replace("github", "Github").replace("itch", "ItchIO")}](${a})`);
			break;
		default:
			break;
	}
	
    return filtered_text.join(", ");
}

module.exports = filter_rename;