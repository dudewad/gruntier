/**
 * Grunt task configuration - compass
 */
module.exports = {
    dev: {
        options: {
            sassDir: "<%=pkg.directories.dev_root %><%=pkg.directories.scss %>",
            cssDir: "<%=pkg.directories.dev_root %><%=pkg.directories.css %>",
            environment: "development",
            outputStyle: "expanded",
            noLineComments: "true"
        }
    },

    dist: {
        options: {
            basePath: "<%= pkg.directories.root %>",
            sassDir: "<%=pkg.directories.dev_root %><%=pkg.directories.scss %>",
            cssDir: "<%=pkg.directories.prod_root %><%=pkg.directories.css %>",
            environment: "production",
            outputStyle: "compressed",
            noLineComments: "true"
        }
    }
};