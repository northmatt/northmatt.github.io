/**
 * Formats Dataview date range to be human readable
 */
function process_front_matter() {
	app.fileManager.processFrontMatter(app.vault.getFileByPath(dv.current().file.path), (fm) => {
		fm.pageTitle = `${dv.page("Index").firstName}'s Portfolio - ${dv.current().projectNameOverride ? dv.current().projectNameOverride : dv.current().file.name}`;
	});

	return "DataviewJS frontmatter manager here";
}

return process_front_matter();