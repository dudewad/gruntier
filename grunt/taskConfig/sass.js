/**
 * Grunt task configuration - sass
 */
module.exports = {
    dist: {
        options: {
            style: "compressed"
        },
        files: {"<%=pkg.directories.some_prod_root %><%=pkg.directories.css %>default.css": "<%=pkg.directories.some_dev_root %><%=pkg.directories.scss %>default.scss"}
    },

    dev: {
        options: {
            style: "expanded",
            lineNumbers: "true"
        },
        files: {"<%=pkg.directories.some_dev_root %><%=pkg.directories.css %>default.css": "<%=pkg.directories.some_dev_root %><%=pkg.directories.scss %>default.scss"}
    }
};