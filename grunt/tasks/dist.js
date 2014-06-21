/**
 * Grunt task - dist
 */

//Explicit task definition
module.exports = function(grunt){
    grunt.registerTask("dist", ["jshint:dist",
                                "jscs:dist",
                                "concat:dist",
                                "uglify:dist"]);
};