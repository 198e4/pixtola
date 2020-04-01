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
					'views/index.hbs': 'views/dev/index.hbs',
					'views/case-studies.hbs': 'views/dev/case-studies.hbs',
					'views/lazyouts.hbs': 'views/dev/case-study/lazyouts.hbs',
					'views/online-price-book.hbs': 'views/dev/case-study/online-price-book.hbs',
					'views/quotedcar-dashboard.hbs': 'views/dev/case-study/quotedcar-dashboard.hbs',
					'views/vehicle-pricing-satellite.hbs': 'views/dev/case-study/vehicle-pricing-satellite.hbs',
					'views/email-template-generator.hbs': 'views/dev/case-study/email-template-generator.hbs',
					'views/quotedcar-logo.hbs': 'views/dev/case-study/quotedcar-logo.hbs'
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
					'../public/stylesheets/css/ui.min.css': '../public/stylesheets/scss/ui.scss',
					'../public/stylesheets/css/case-studies.min.css': '../public/stylesheets/scss/case-studies.scss',
					'../public/stylesheets/css/case-study.min.css': '../public/stylesheets/scss/case-study.scss'
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
