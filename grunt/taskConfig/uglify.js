/**
 * Grunt task configuration - uglify
 */
module.exports = {
    /**
     * Production
     */
    dist: {
        files: {
            "<%=pkg.directories.prod_root %><%=pkg.directories.js %>app.js": "<%=pkg.directories.dev_root %><%=pkg.directories.js %>app.js"
        }
    }
};