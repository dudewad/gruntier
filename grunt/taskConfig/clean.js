module.exports = {
    /**
     * Prod
     * Note: It's not necessary to nuke the dist directory. Your clean purposes may be different.
     * This is an example only.
     */
    dist: [
        "<%=pkg.directories.prod_root %>"
    ],

    /**
     * Clean the temp directory, if applicable!
     */
    temp: [
        "<%=pkg.directories.temp_root %>"
    ]
};