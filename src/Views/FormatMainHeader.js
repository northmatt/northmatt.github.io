/**
 * Formats Dataview date range to be human readable
 */
function format_main_header() {
    return `<cd><center><h1> ${dv.page("Index").firstName} ${dv.page("Index").lastName} - Portfolio - ${dv.current().projectName} ${dv.current().projectOrganization ? "by " + dv.current().projectOrganization : ""} </h1></center></cd>`;
}

return format_main_header();