Gruntier
========

This is a base grunt distribution and recommends a specific project format for automating front-end processes.
Grunt tasks and task configurations are not stored in the Gruntfile.js file. Instead, they are modularly included via the ./grunt/tasks and ./grunt/taskConfigurations/ directories.
No Grunt task configuration options should be stored in either Gruntfile.js or in package.json. Grunt-related configurations such as directories, project information, etc. still SHOULD go into the package.json file.
package.json and Gruntfile.js ideally should live in the same directory at the project root.