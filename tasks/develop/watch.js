// Modules.
let gulp = require('gulp'),
    config = require('../../config'),
    path = require('path');

// Watch command.
gulp.task('develop:watch', ['build'], () => {
    'use strict';

    let lessPath = path.join(config.development.paths.less, '**/*.less');
    let sourcePath = path.join(config.development.paths.js, 'src/**/!(*.spec).js');

    gulp.watch([lessPath], ['build:less']);
    gulp.watch([sourcePath], ['build:js']);
});
