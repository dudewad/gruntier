/**
 * Grunt task - dev
 */
module.exports = function(grunt){
    grunt.registerTask("dev", [
        "jshint:dev",
        "sass:dev",
        "concat:dev"
    ]);
};