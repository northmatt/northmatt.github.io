/**
 * Formats Dataview date range to be human readable
 */
function format_date_human(date_start, date_end) {
	if (typeof date_start != "object" || typeof date_end != "object" && typeof date_end != "string") {
		return [];
	}
	
	var date_range = date_start.toFormat("MMM y");
	var date_length = "";
	
	if (typeof date_end == "string") {
		date_range += ` - ${date_end}`;
		return [date_range, date_length].join("\n");
	}
	
	if (date_end.diff(date_start, "months").months >= 1) {
		date_range += ` - ${date_end.toFormat("MMM y")}`;
		date_length = date_end.diff(date_start, "months").toHuman({ maximumSignificantDigits: 2 });
	}
	else {
		date_length = date_end.diff(date_start, "days").toHuman();
	}
	
    return [date_range, date_length].join("\n");
}

return format_date_human(input[0], input[1]);