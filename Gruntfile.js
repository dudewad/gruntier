module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            dist: {
                options: {
                    quotmark: "double",
                    curly: true,
                    indent: 4
                },
                src: ["dev/js/*.js", "!dev/js/app.js"]
            }
        },

        jscs: {
            dist: {
                options: "<%= pkg.jscsOptions %>",
                files: {
                    src: [
                        "<%=pkg.directories.dev_root %><%=pkg.directories.js %>*.js",
                        "<%=pkg.directories.root %>Gruntfile.js",
                        "!<%=pkg.directories.dev_root %><%=pkg.directories.js %>app.js"
                    ]
                }
            }
        },

        concat: {
            options: {
                separator: ";\r\n"
            },
            dist: {
                src: ["dev/js/*.js",
                     "!dev/js/app.js"],
                dest: "dev/js/app.js"
            }
        },

        uglify: {
            dist: {
                files: {
                    "prod/js/app.js": ["dev/js/app.js"]
                }
            }
        }
    });

    //Loads all tasks from devDependencies.
    //See load-grunt-tasks for specific customization options.
    require("load-grunt-tasks")(grunt);

    grunt.registerTask("dist", ["jshint:dist", "jscs:dist", "concat:dist", "uglify:dist"]);
};