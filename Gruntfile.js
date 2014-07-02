/**
 * This method will load all task configurations dynamically from the
 * specified directory.
 *
 * @param {String} path         The path to the task configuration settings files
 * @returns {{}}
 */
function loadTaskConfigurations(path){
    var glob = require('glob');
    var configs = {};
    var key;

    //Gets all task config items and imports them to the configs object
    glob.sync('*', {cwd: path}).forEach(function(option){
        key = option.replace(/\.js$/, '');
        configs[key] = require(process.cwd() + "/" + path + option);
    });

    return configs;
}



/**
 * Kick off the Grunt module
 * @param {Object} grunt            The Grunt object
 */
module.exports = function(grunt){
    //Run initial Grunt config
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        directories: "<%=pkg.directories %>"
    });

    //Load all task configurations
    var taskConfigurations = loadTaskConfigurations(grunt.config.get("pkg.directories.gruntTaskConfig"));

    //Add those task configurations to the grunt config
    for(var task in taskConfigurations){
        grunt.config.set(task, taskConfigurations[task]);
    }

    //Gets all defined tasks from the defined tasks directory
    grunt.loadTasks(grunt.config.get("pkg.directories.gruntTasks"));

    //Load all tasks from devDependencies.
    //See load-grunt-tasks documentation for specific customization options.
    require("load-grunt-tasks")(grunt);
};