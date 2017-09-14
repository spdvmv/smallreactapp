module.exports = function(grunt) {

   grunt.initConfig({
   jshint: {
       all: [ 'gruntfile.js' ]
   },
    jscs: {
            src: "<%= jshint.all %>"
        },
    htmlhint: {
      all: {
        src: 'public/index.html'
      }
    },
    stylelint: {
    all: [ 'src/index.css' ]
  },

   watch: {
       files: [ 'gruntfile.js','public/index.html','src/index.css' ],
       tasks: [ 'jshint','htmlhint','stylelint' ]
   }
});
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks("grunt-jscs");
   grunt.loadNpmTasks('grunt-htmlhint');
   grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks( 'grunt-stylelint' );
};
