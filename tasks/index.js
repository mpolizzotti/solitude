'use strict';

// Modules.
let gulp = require('gulp'),
    requireDir = require('require-dir'),
    runSequence = require('gulp-run-sequence');

// Require all tasks within tasks directory, including subfolders.
requireDir('./build', { recurse: true });
requireDir('./quality', { recurse: true });

// gulp command.
gulp.task('default', () => {
    runSequence(
        'build'
    );
});

// gulp build command.
gulp.task('build', () => {
    runSequence(
        'build:less',
        'build:js'
    );
});

// gulp test command.
gulp.task('test', () => {
    runSequence(
        'quality:checkstyle'
    );
});
