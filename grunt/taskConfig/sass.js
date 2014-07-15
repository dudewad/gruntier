/**
 * Grunt task configuration - sass
 */
module.exports = {
    /**
     * Dev
     */
    dev: {
        options: {
            style: "expanded",
            lineNumbers: "true"
        },
        files: {"<%=pkg.directories.dev_root %><%=pkg.directories.css %>default.css": "<%=pkg.directories.dev_root %><%=pkg.directories.scss %>default.scss"}
    },


    /**
     * Production
     */
    dist: {
        options: {
            style: "compressed"
        },
        files: {"<%=pkg.directories.prod_root %><%=pkg.directories.css %>default.css": "<%=pkg.directories.dev_root %><%=pkg.directories.scss %>default.scss"}
    }
};