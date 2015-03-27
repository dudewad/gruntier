module.exports = {
    options: {
        partials: '<%=pkg.directories.dev_root %><%= pkg.directories.handlebarsTemplate %>/partials/**/*.hbs',
        layoutdir: '<%=pkg.directories.dev_root %><%= pkg.directories.handlebarsTemplate %>/layouts',
        helpers: '<%=pkg.directories.dev_root %><%= pkg.directories.handlebarsTemplate %>/helpers/**/*.js',
        data: '<%=pkg.directories.dev_root %><%= pkg.directories.handlebarsTemplate %>/data/**/*.json',
        layoutext: '.hbs',
        flatten: true
    },
	pages: {
		options:{
			layout: 'default'
		},
		files: [
			{
				src: ["<%=pkg.directories.dev_root %><%= pkg.directories.handlebarsTemplate %>/pages/**/*.hbs"],
				dest: "<%=pkg.directories.dev_root %>"
			}
		]
	}
};
