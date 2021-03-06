module.exports = function(grunt) {
 
  grunt.initConfig({
    jshint: {
        files: ['Gruntfile.js', 'src/main/javascript/*.js', 'helloworld.js'],
        options: {
          globals: {
            jQuery: true,
            smarttabs: true // allowed mixed tabs and spaces
          }
        }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', 'jshint');
 
};