module.exports = {
    dist: {
        options: {
            quotmark: "double",
                curly: true,
                indent: 4
        },
        src: [
            "<%=pkg.directories.dev_root %><%=pkg.directories.js %>*.js",
            "!<%=pkg.directories.dev_root %><%=pkg.directories.js %>app.js"
        ]
    }
};