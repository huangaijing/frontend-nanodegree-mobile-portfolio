/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        responsive_images: {
            dev: {
                options: {
                    sizes: [{
                        // name: 'medium',
                        width: 400,
                        quality: 30
                    }, {
                        // name: 'large',
                        width: 800,
                        quality: 30
                    }, {
                        // name: 'large',
                        width: 1600,
                        quality: 30
                    }]
                },

                /*
                You don't need to change this part if you don't change
                the directory structure.
                */
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'images_src/',
                    dest: 'img/'
                }]
            }
        },
        /* creat webp file accordingly*/
        cwebp: {
            dev: {
                options: {
                    q: 100
                },
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/'
                }]
            }
        },
        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ['img'],
            },
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            dev: {
                options: {
                    create: ['img']
                },
            },
        },

        /* Copy the "fixed" images that don't go through processing into the images/directory */
        // copy: {
        //     dev: {
        //         files: [{
        //             expand: true,
        //             cwd: 'images_src/',
        //             src: 'fixed/*.{gif,jpg,png,svg}',
        //             dest: 'images/'
        //         }]
        //     },
        // },
    });

    // grunt.loadNpmTasks('grunt-responsive-images');
    // grunt.loadNpmTasks('grunt-contrib-clean');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-mkdir');
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', [
        'clean',
        'mkdir',
        // 'copy',
        'responsive_images',
        'cwebp'
    ]);

};