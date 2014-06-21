module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        directories: "<%=pkg.directories %>",

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

        compass: {
            dist: {
                options: {
                }
            }
        },

        concat: {
            options: {
                separator: ";\r\n"
            },
            dist: {
                src: ["<%=pkg.directories.dev_root %><%=pkg.directories.js %>*.js",
                     "!<%=pkg.directories.dev_root %><%=pkg.directories.js %>app.js"],
                dest: "<%=pkg.directories.dev_root %><%=pkg.directories.js %>app.js"
            }
        },

        uglify: {
            dist: {
                files: {
                    "<%=pkg.directories.dev_prod %><%=pkg.directories.js %>app.js": ["<%=pkg.directories.dev_root %><%=pkg.directories.js %>app.js"]
                }
            }
        }
    });

    //Gets all defined tasks from the defined tasks directory
    grunt.loadTasks(grunt.config.get("pkg.directories.gruntTasks"));

    //Loads all tasks from devDependencies.
    //See load-grunt-tasks for specific customization options.
    require("load-grunt-tasks")(grunt);
};