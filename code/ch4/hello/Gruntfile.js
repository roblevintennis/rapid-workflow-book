'use strict';
module.exports = function(grunt) {
    grunt.registerTask('foo', 'Hello world example', function() {
        grunt.log.writeln('Hello world.');
    });
};
