/**
 * Grunt task configuration - copy
 */
module.exports = {
    /**
     *  Buying guides need to copy images and html files
     */
    exampleTask: {
        files: [
            {
                expand: "true",
                cwd: "<%=pkg.directories.your_root_working_directory %>",
                src: "<%=pkg.settings.directory_with_src_files %>*.html",
                dest: "<%=pkg.directories.target_directory_for_output %>",
                rename: function(){/* Some function here will perform file renaming tasks. */}
            }
        ]
    }
};