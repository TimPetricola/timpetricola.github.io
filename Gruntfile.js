module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'stylesheets',
          environment: 'production',
          outputStyle: 'compressed',
          noLineComments: true
        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      css: {
        files : ['sass/*.sass'],
        tasks: ['compass'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};
