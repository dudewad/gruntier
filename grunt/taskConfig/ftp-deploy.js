/**
 * Grunt task configuration - ftp-deploy
 */
module.exports = {
    dist: {
        auth: {
            host: "<%=pkg.remote.ftp_dev.auth.host %>",
            port: "<%=pkg.remote.ftp_dev.auth.port %>",
            authKey: "key_ftp_dev"
        },
        src: "<%=pkg.directories.prod_root %>",
        dest: "<%=pkg.remote.ftp_dev.dest %>",
        exclusions: []
    },
    dist_code_only: {
        auth: {
            host: "<%=pkg.remote.ftp_dev.auth.host %>",
            port: "<%=pkg.remote.ftp_dev.auth.port %>",
            authKey: "key_ftp_dev"
        },
        src: "<%=pkg.directories.prod_root %>",
        dest: "<%=pkg.remote.ftp_dev.dest %>",
        exclusions: ["<%=pkg.directories.prod_root %><%=pkg.directories.asset %>**"]
    }
};