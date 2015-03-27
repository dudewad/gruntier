module.exports = {
    options: {
        args: ["--verbose --perms --chmod=0755"],
        exclude: [".git*", ".DS_Store"],
        ssh: true,
        recursive: true,
        syncDest: true,
        compareMode: "checksum"
    },
    qa: {
        options: {
            src: "./dist/",
            dest: "/var/www/html/some-base-dir",
	        host: "user@somehost.com"
        }
    },
    staging: {
        options: {
            src: "./dist/",
            dest: "/var/www/html/some-base-dir",
            host: "user@somehost.com"
        }
    },
	dist: {
		options: {
			src: "./dist/",
            dest: "/var/www/html/some-base-dir",
            host: "user@somehost.com"
		}
	}
};
