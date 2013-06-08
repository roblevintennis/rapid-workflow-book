'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    imagemin: {
      dist: {
        options: {
          progressive: true,
          // Only for pngs
          optimizationLevel: 7
        },
        files: [{
          // Assumes running from project root
          expand: true,
          cwd: './images',
          src: '*.{png,jpg,jpeg}',
          dest: './images/compressed',
        }]
      }
    }
  });
  // Include the imagemin npm
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // Register imagemin task as default task
  grunt.registerTask('default', ['imagemin:dist']);
};

