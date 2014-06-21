module.exports = {
    dist: {
        files: {
            "<%=pkg.directories.prod_root %><%=pkg.directories.js %>app.js": "<%=pkg.directories.dev_root %><%=pkg.directories.js %>app.js"
        }
    }
};