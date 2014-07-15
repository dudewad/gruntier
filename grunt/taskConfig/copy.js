/**
 * Grunt task configuration - copy
 */
module.exports = {
    /**
     * Production
     */
    dist: {
        files: [
            //Copy all HTML
            {
                expand: "true",
                cwd: "<%=pkg.directories.dev_root %>",
                src: "*.html",
                dest: "<%=pkg.directories.prod_root %>"
            },
            {
                expand: "true",
                cwd: "<%=pkg.directories.dev_root %>",
                src: "<%=pkg.directories.images %>**",
                dest: "<%=pkg.directories.prod_root %>"
            }
        ]
    }
};