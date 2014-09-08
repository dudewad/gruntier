module.exports = {
    dev: {
        options: {
            quotmark: "double",
            curly: true,
            indent: 4
        },
        src: [
            "<%=pkg.directories.dev_root %><%=pkg.directories.js %>*.js",
            "!<%=pkg.directories.dev_root %><%=pkg.directories.js %>app.js"
        ]
    },

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