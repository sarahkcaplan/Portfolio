
// Load Grunt plug-ins
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-responsive-images');

//Configure Grunt tasks
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'x-small',
            width: '25%',
            suffix: '_x-small',
            quality: 15
          },{
            name: 'small',
            width: '30%',
            suffix: '_small',
            quality: 20
          },{
            name: 'medium',
            width: '50%',
            suffix: '_medium',
            quality: 40
          },{
            name: 'large',
            width: '80%',
            suffix: '_large',
            quality: 50
      	 }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/',
          dest: 'images/'
        }]
      }
    },
  });

//Reguister Grunt tasks
  grunt.registerTask('default', ['responsive_images']);
};