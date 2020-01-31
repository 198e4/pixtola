// Grunt Wrapper Function
module.exports = function(grunt) {

	// Initialize Grunt Task Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['../public/javascripts/ui.js'],
			options: {
				globals: {
					jQuery: true
				}
			}
		},
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
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Register Tasks
	grunt.registerTask('default', ['jshint', 'uglify']);

};
