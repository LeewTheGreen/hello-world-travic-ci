module.exports = function(grunt) {
 
  grunt.initConfig({
    jshint: {
    	all: ['Gruntfile.js', 'src/**/*.js','helloworld.js']
    }
  	options: {
      // more options here if you want to override JSHint defaults
  		globals: {
  			jQuery: true,
  			console: true,
  			module: true
	    }
	  }
  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', 'jshint');
 
};