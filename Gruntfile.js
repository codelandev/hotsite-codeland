module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uncss: {
      dist: {
        files: {
          'public/dist/style.css': ['public/app/index.html']
        }
      }
    },

    processhtml: {
      dist: {
        files: {
          'public/dist/index.html': ['public/app/index.html']
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'public/app/images',
          src: ['**/*.{png,jpg,svg}'],
          dest: 'public/dist/images'
        }]
      }
    }
  });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-processhtml');

    grunt.registerTask('default', ['uncss', 'processhtml']);
};
