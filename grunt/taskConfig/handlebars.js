module.exports = {
    compile: {
        options: {
            wrapped: true,
            processName: function (filename) {
                return filename.replace(/^\.\/app/, '').replace(/\.hbs$/, '');
            }
        },
        files: {
            "<%=pkg.directories.dev_root %><%=pkg.directories.js %>compiledHandlebarsTemplates.js": ["<%=pkg.directories.dev_root %><%=pkg.directories.handlebarsTemplates %>{,*/}*.hbs"]
        }
    }
};