/**
 * Grunt task - dev
 */
module.exports = function(grunt){
    grunt.registerTask("dev", [
        "assemble",
        "jshint:dev",
        "sass:dev",
        "concat:dev"
    ]);
};