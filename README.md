# Gruntier
This is a base grunt distribution and recommends a specific project format for automating front-end processes.  
  
Grunt tasks and task configurations are not stored in the Gruntfile.js file. Instead, they are modularly included via the ./grunt/tasks and ./grunt/taskConfigurations/ directories.  
  
No Grunt task configuration options should be stored in either Gruntfile.js or in package.json. Grunt-related configurations such as directories, project information, etc. still SHOULD go into the package.json file.  
  
package.json and Gruntfile.js ideally should live in the same directory at the project root.  
  
**Note:** _Many of these tasks require configuration. This is not necessarily a working project - it is merely a starting point._

## Package.json recommendation
Take note that it is the aim of this project to remove any hard-coded references to directories that might change from any congigurations, and abstract them into the Package.json file. Take a look at the pkg.directories object for examples. The thinking is, if it's a directory for a particular type of resource, and that resource could change, then assign it a reference in package.json.

This is particularly important for projects where directories might change. This means that you can update locations in one spot, and your grunt configuration will automatically adjust to support your new directory structure.

## Task Configuration
Make sure to manually configure each task config at the start of a project. You may choose not to use many of the task modules, and many of them contain sample data that must be replaced to work. Also note that not all of these are guaranteed to work out of the box with the directory structure provided. This is merely a starting point.

## Clean
Clean by default will empty the dist and temp directories every time. This is good to have in mind. 

## FTP tasks
For the uninitiated, running the ftp deploy task is very handy.
  
Also, note that there is an .ftppass.example file. To use it, remove the .example extension. **The .ftppass file should _never_ be checked into the project source control**. This file should be explicitly transferred from one developer to another to maintain security.  
  
The difference between standard ftp tasks and their code-only tasks is that they can be set up to upload only code, whereas the standard task would upload all assets. This is useful for making quick, iterative updates to the server without uploading all the assets, which can be time consuming (particularly with video in a project).

It is recommended that you use rSync instead. See the rSync section if you are unfamiliar, as rSync is a Unix-native  tool that has to be installed on Windows.

## String-replace
String-replace is currently set up with an example of how to "include" javascript from one file to another; this is not particularly useful. Note that it is merely an example.

## Rsync Notes
Rsync is a wonderful file transfer utilty, and it is how files are transferred to our various deployment environments for this project. If you do not have experience with rsync, give it a chance; do not try to change this over to an FTP project.

### Quick setup
Rsync runs over ssh, and is natively a linux/mac-based tool. Windows does not have it by default.
Windows users need to perform the following steps to get it working:

1. Get some version of ssh 2 installed. I recommend using cwRsync (step 2) as it comes packaged with ssh and ssh-keygen.
Otherwise, you can use something like openSSH, but be careful, because some versions of this will wipe your Windows path
when installing because of a bug in the installer.

2. Get a copy of some Windows flavor of rsync. For quick, easy installs, I recommend cwRsync (https://www.itefix.net/cwrsync).
If you want something more robust (or already have it), you can use Cygwin (https://www.cygwin.com/), an extensive library of
unix functionality ported to Windows. I recommend cwRsync because you don't need to run any additional tools to use it, and
setup is extremely fast, where Cygwin though powerful, is very slow to install and setup can be particularly frustrating for
the uninitiated.

3. If you don't already have it, add a new system environment variable - HOME - as a directory in your dev folder outside the project. This will be used by
.ssh to store your generated keys.

4. With .ssh installed and your HOME variable declared, you can now generate your keys. Go to the command line and enter
"ssh-keygen -t rsa" to generate an RSA ssh key. Hit enter at all the prompts (leave them blank), and a new key will be
generated in your home folder that you created under a ".ssh" sub-directory, including an id_rsa file, and an id_rsa.pub
file.

5. Connect to the server via ssh to get the first-time known host logged:
ssh user@example.com
Password information for the server is not provided in this file because this is a project file and login information is
not to be passed through the repository. See the project admin for this information.
Once you log in you'll get a warning about adding this server to the known hosts file. This is good.

6. CD to the .ssh directory on the server, and append the contents of your newly created id_rsa.pub file from your local
machine to the existing authorized_keys file. BE SURE TO APPEND ONLY, DO NOT OVERWRITE. If you are not sure how to do
this, seek assistance!!!

7. Make sure the permissions are correct for the authorized_keys file. The command:
stat -c "%a %n" authorized_keys
should list an octal permissions set of 600. If it does not, chmod it to match.
Likewise, the .ssh directory itself should have permissions of 700. Follow the above steps to ensure it is so.

7. On Windows, it is likely that the generated key (id_rsa) has permissions set that will cause it to be ignored by ssh
when trying to connect, failing with a giant error about dangerous permissions, etc.
You need to go to the home directory that you made in step 3 (the one that was assigned to your HOME system environment
variable), and open the .ssh directory. There, you need to edit the id_rsa permissions. Do this by right clicking it,
going to properties, then the security tab. Hit "edit" under the "Group or user names" box, and revoke all permissions
for every listed user except for administrators. This should fix your permissions issue when trying to connect.

8. Test your rsync by running grunt rsync from the project root.

#### Problems?
If you can't get rSync working, please open an issue in the issue tracker or send an email to layton.miller@razorfish.com
If you had to do something different to get it working, please let me know!