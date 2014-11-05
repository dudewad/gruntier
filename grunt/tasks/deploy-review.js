/**
 * Grunt task - deploy-qa
 *
 * Note: this task runs the dev and dist alias tasks as well. It's best to have it all in sync.
 */
module.exports = function (grunt) {
    grunt.registerTask("deploy-review", [
        //Run dev and dist every time. When packaging for prod we
        //want all environments to be in sync.
        "dev",
        "dist",
        "ftp-deploy:review"
    ]);
};