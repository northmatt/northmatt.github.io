/**
 * Formats Dataview date range to be human readable
 */
function format_date_human(date_start, date_end) {
	if (typeof date_start != "object" || typeof date_end != "object") {
		return [];
	}
	
	var date_range = date_start.toFormat("MMM y");
	var date_length = "";
	
	if (date_end.diff(date_start, "months").months >= 1) {
		date_range += ` - ${date_end.toFormat("MMM y")}`;
		date_length = date_end.diff(date_start, "months").toHuman();
	}
	else {
		date_length = date_end.diff(date_start, "days").toHuman();
	}
	
    return [date_range, date_length];
}

module.exports = format_date_human;