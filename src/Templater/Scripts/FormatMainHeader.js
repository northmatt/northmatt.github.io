/**
 * Formats Dataview date range to be human readable
 */
function format_main_header(dv) {
    return `${dv.page("Index").firstName} ${dv.page("Index").lastName} - Portfolio - ${dv.current().projectName} ${dv.current().projectOrganization ? "by " + dv.current().projectOrganization : ""}`;
}

module.exports = format_main_header;