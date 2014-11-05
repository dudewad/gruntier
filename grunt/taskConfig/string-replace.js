module.exports = function(grunt){
    return {
        default: {
            files: {
                "<%=pkg.directories.temp_root %><%=pkg.directories.js %>main.js": "<%=pkg.directories.dev_root %><%=pkg.directories.js %>main.js"
            },
            options: {
                replacements: [
                    {
                        pattern: /\/\*(?:\*(?!\/)|[^*])*(?:@import)(?:\s*)(.*)(?:\*(?!\/)|[^*])*\*\//ig,
                        replacement: function (m, g1, offset, string) {
                            return grunt.file.read(grunt.config.get("pkg.directories.dev_root") + g1);
                        }
                    }
                ]
            }
        }
    }
};