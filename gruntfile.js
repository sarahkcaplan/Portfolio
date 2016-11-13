
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
            name: 'xs',
            width: '50%',
            suffix: '_x-small',
            quality: 40
          },{
            name: 's',
            width: '60%',
            suffix: '_small',
            quality: 40
          },{
            name: 'm',
            width: '80%',
            suffix: '_medium',
            quality: 60
          },{
            name: 'l',
            width: '95%',
            suffix: '_large',
            quality: 80
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