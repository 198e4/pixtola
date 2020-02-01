// Grunt Wrapper Function
module.exports = function(grunt) {

	// Initialize Grunt Task Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// Minify HTML
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'views/index.hbs': 'views/dev/index.hbs'
				}
			}
		},
		// Compile and Minify SASS
		sass: {
			dist: {
				options: {
					style: 'compressed',
					trace: true
				},
				files: {
					'../public/stylesheets/css/ui.min.css': '../public/stylesheets/scss/ui.scss'
				}
			}
		},
		// Check for JS Errors
		jshint: {
			files: ['../public/javascripts/ui.js'],
			options: {
				globals: {
					jQuery: true
				}
			}
		},
		// Minify JS
		uglify: {
			dist: {
				files: {
					'../public/javascripts/ui.min.js': ['../public/javascripts/ui.js']
					// 'testing.min.js': ['testing.js']
				}
			}
		}
	});

	// Load Grunt Tasks Saved in Package.json as devDependencies
		// Used for HTML
		grunt.loadNpmTasks('grunt-contrib-htmlmin');
		// Used for CSS
		grunt.loadNpmTasks('grunt-contrib-sass');
		// Used for JS
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpmTasks('grunt-contrib-uglify');

	// Register Tasks
	grunt.registerTask('default', ['htmlmin', 'sass','jshint', 'uglify']);

};
