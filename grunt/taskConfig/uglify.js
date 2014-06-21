module.exports = {
    dist: {
        files: {
            "<%=pkg.directories.dev_prod %><%=pkg.directories.js %>app.js": "<%=pkg.directories.dev_root %><%=pkg.directories.js %>app.js"
        }
    }
};