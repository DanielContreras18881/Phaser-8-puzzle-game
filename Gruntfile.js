module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['js/lib/Phaser.js','js/src/NumberBlock.js', 'js/src/Board.js', 'js/src/Solver.js', 'js/src/Boot.js', 'js/src/Preloader.js', 'js/src/MainMenu.js', 'js/src/Game.js'],
                dest: 'build/8puzzle.js',
            },
        },
        replace: {
            example: {
                src: ['build/8puzzle.js'],             // source files array (supports minimatch)
                dest: 'build/8puzzle.js',             // destination directory or file
                replacements: [{
                  from: 'js/res/',                   // string replacement
                  to: '/static/Games/8puzzle/assets/'
              }]
          }            
      },  
      uglify: {
        build: {
            src: 'build/8puzzle.js',
            dest: 'build/8puzzle.min.js'
        }
    },
    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'js/res/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'build/assets/'
            }]
        }
    },
    copy: {
      main: {
        files: [{
            expand: true,
            cwd: 'js/res/',
            src: ['**/*.{json,mp3,ogg,wav}'],
            dest: 'build/assets/'
        },
        {
            expand: true,
            cwd: 'js/res/',
            src: ['fonts/**'],
            dest: 'build/assets/'
        },
        ]
    }
},
});



    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['concat','replace','uglify','imagemin','copy']);

}; 