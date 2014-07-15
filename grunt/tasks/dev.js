/**
 * Grunt task - dev
 */
module.exports = function(grunt){
    grunt.registerTask("dev", [
        "jscs:dev",
        "sass:dev",
        "concat:dev"
    ]);
};