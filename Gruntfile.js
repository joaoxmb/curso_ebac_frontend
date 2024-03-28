module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    concurrent: {
      target: ['sass', 'less', 'teste', 'teste2']
    },
    sass: {
      dist: {
        option: {
          style: 'compressed'
        },
        files: {
          './dist/styles/main-sass.min.css': './src/styles/main.scss'
        }
      }
    },
    less: {
      development: {
        files: {
          './dist/styles/main.css': './src/styles/main.less'
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
          './dist/styles/main.css': './src/styles/main.less'
        }
      }
    }
  })

  
  grunt.registerTask('teste', () => {
    console.log('teste');
  })
  grunt.registerTask('teste2', function () {
    const done = this.async();
    
    setTimeout(() => {
      console.log('async');
      done();
    }, 2000)
  })

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', 'concurrent');
}