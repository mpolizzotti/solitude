// Modules.
let gulp = require('gulp'),
    config = require('../../config'),
    path = require('path');

// Package libraries.
gulp.task('package:css', () => {
    'use strict';

    let sourcePath = path.join(config.development.paths.css, '**/*');
    let destinationPath = config.package.paths.css;

    return gulp
        .src([sourcePath])
        .pipe(gulp.dest(destinationPath));
});
