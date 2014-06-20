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
                        "<%= pkg.directories.dev_root %>/<%= pkg.directories.js %>/*.js>",
                        "<%= pkg.directories.root %>Gruntfile.js",
                        "!<%=pkg.directories.dev_root %><%=pkg.directories.js %>/app.js>"
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

    //Trying to output the actual value for the directory...
    grunt.log.write("<%= pkg.directories.dev_root %>/<%= pkg.directories.js %>/*.js>");


    /**
     * Set up tasks
     * @type {string[]}
     */
    var taskList = [
        "grunt-contrib-concat",
        "grunt-contrib-jshint",
        "grunt-contrib-uglify",
        "grunt-jscs-checker"
    ];

    for (var task in taskList){
        grunt.loadNpmTasks(taskList[task]);
    }

    grunt.registerTask("dist", ["jshint:dist", "jscs:dist", "concat:dist", "uglify:dist"]);
};