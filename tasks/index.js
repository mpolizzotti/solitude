'use strict';

// Modules.
let gulp = require('gulp'),
    requireDir = require('require-dir'),
    runSequence = require('gulp-run-sequence');

// Require all tasks within tasks directory, including subfolders.
requireDir('./build', { recurse: true });

// gulp build command.
gulp.task('build', function () {
    runSequence(
        'build:less'
    );
});
