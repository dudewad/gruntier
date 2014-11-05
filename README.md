# Gruntier
This is a base grunt distribution and recommends a specific project format for automating front-end processes.
Grunt tasks and task configurations are not stored in the Gruntfile.js file. Instead, they are modularly included via the ./grunt/tasks and ./grunt/taskConfigurations/ directories.
No Grunt task configuration options should be stored in either Gruntfile.js or in package.json. Grunt-related configurations such as directories, project information, etc. still SHOULD go into the package.json file.
package.json and Gruntfile.js ideally should live in the same directory at the project root.
**Note:** _Many of these tasks require configuration. This is not necessarily a working project - it is merely a starting point._

## Task Configuration
Make sure to manually configure each task config at the start of a project. You may choose not to use many of the task modules, and you many of them contain sample data that must be replaced to work. Also note that not all of these are guaranteed to work out of the box with the directory structure provided. This is merely a starting point.

## Clean
Clean by default will empty the dist and temp directories every time. This is good to have in mind. 

## FTP tasks
For the uninitiated, running the ftp deploy task is very handy. There are examples for dev, qa, and review, however they are all the same in theory - this is just a quick way to get a project that has multiple viewing locations for dev, qa and the client respectively. Also, note that there is an .ftppass.example file. To use it, remove the .example extension. **The .ftppass file should _never_ be checked into the project source control**. This file should be explicitly transferred from one developer to another to maintain security.
The difference between standard ftp tasks and their code-only tasks is that they can be set up to upload only code, whereas the standard task would upload all assets. This is useful for making quick, iterative updates to the server without uploading all the assets, which can be time consuming (particularly with video in a project).

## String-replace
String-replace is currently set up with an example of how to "include" javascript from one file to another; this is not particularly useful. Note that it is merely an example.