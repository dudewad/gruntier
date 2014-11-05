/**
 * Grunt task configuration - ftp-deploy
 */
module.exports = {
    qa: {
        auth: {
            host: "<%=pkg.remote.ftp_qa.auth.host %>",
            port: "<%=pkg.remote.ftp_qa.auth.port %>",
            authKey: "key_ftp_qa"
        },
        src: "<%=pkg.directories.prod_root %>",
        dest: "<%=pkg.remote.ftp_qa.dest %>",
        exclusions: []
    },
    qa_code_only: {
        auth: {
            host: "<%=pkg.remote.ftp_qa.auth.host %>",
            port: "<%=pkg.remote.ftp_qa.auth.port %>",
            authKey: "key_ftp_qa"
        },
        src: "<%=pkg.directories.prod_root %>",
        dest: "<%=pkg.remote.ftp_qa.dest %>",
        exclusions: ["<%=pkg.directories.prod_root %><%=pkg.directories.asset %>**"]
    },
    dev: {
        auth: {
            host: "<%=pkg.remote.ftp_dev.auth.host %>",
            port: "<%=pkg.remote.ftp_dev.auth.port %>",
            authKey: "key_ftp_dev"
        },
        src: "<%=pkg.directories.prod_root %>",
        dest: "<%=pkg.remote.ftp_dev.dest %>",
        exclusions: []
    },
    dev_code_only: {
        auth: {
            host: "<%=pkg.remote.ftp_dev.auth.host %>",
            port: "<%=pkg.remote.ftp_dev.auth.port %>",
            authKey: "key_ftp_dev"
        },
        src: "<%=pkg.directories.prod_root %>",
        dest: "<%=pkg.remote.ftp_dev.dest %>",
        exclusions: ["<%=pkg.directories.prod_root %><%=pkg.directories.asset %>**"]
    },
    review: {
        auth: {
            host: "<%=pkg.remote.ftp_review.auth.host %>",
            port: "<%=pkg.remote.ftp_review.auth.port %>",
            authKey: "key_ftp_review"
        },
        src: "<%=pkg.directories.prod_root %>",
        dest: "<%=pkg.remote.ftp_review.dest %>",
        exclusions: []
    },
    review_code_only: {
        auth: {
            host: "<%=pkg.remote.ftp_review.auth.host %>",
            port: "<%=pkg.remote.ftp_review.auth.port %>",
            authKey: "key_ftp_review"
        },
        src: "<%=pkg.directories.prod_root %>",
        dest: "<%=pkg.remote.ftp_review.dest %>",
        exclusions: ["<%=pkg.directories.prod_root %><%=pkg.directories.asset %>**"]
    }
};