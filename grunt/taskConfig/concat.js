module.exports = {
    options: {
        separator: ";\r\n"
    },
    dist: {
        src: [
            "<%=pkg.directories.dev_root %><%=pkg.directories.js %>*.js",
            "!<%=pkg.directories.dev_root %><%=pkg.directories.js %>app.js"
        ],
        dest: "<%=pkg.directories.dev_root %><%=pkg.directories.js %>app.js"
    }
};