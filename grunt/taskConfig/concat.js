module.exports = {
    options: {
        separator: ";\r\n"
    },


    /**
     * Dev
     */
    dev: {
        src: [
            "<%=pkg.directories.dev_root %><%=pkg.directories.js %>*jquery*.js",
            "<%=pkg.directories.dev_root %><%=pkg.directories.js %>*.js",
            "!<%=pkg.directories.dev_root %><%=pkg.directories.js %>app.js"
        ],
        dest: "<%=pkg.directories.dev_root %><%=pkg.directories.js %>app.js"
    },


    /**
     * Prod
     */
    dist: {
        src: [
            "<%=pkg.directories.dev_root %><%=pkg.directories.js %>*jquery*.js",
            "<%=pkg.directories.dev_root %><%=pkg.directories.js %>*.js",
            "!<%=pkg.directories.dev_root %><%=pkg.directories.js %>app.js"
        ],
        dest: "<%=pkg.directories.prod_root %><%=pkg.directories.js %>app.js"
    }
};