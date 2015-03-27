module.exports = {
    dist: {
        options: {
            compile: true
        },
        files: {
            "<%=pkg.directories.dev_root %>/style/main.css": ["<%=pkg.directories.dev_root %><%= pkg.directories.css %>/main.less"]
        }
    }
};
