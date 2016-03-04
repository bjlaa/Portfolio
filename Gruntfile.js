module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
            {
              name: 'medium',
              width: '70%',
              suffix: '',
              quality: 100
            },
            {
              name: 'small',
              width: '50%',
              suffix: '',
              quality: 100
            }
          ]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'css/foret',
          dest: 'css/foret'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-resize-crop');
  grunt.registerTask('default', ['responsive_images', ]);

};
