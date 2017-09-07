// Modules.
let gulp = require('gulp'),
    config = require('../../config'),
    path = require('path');

// Copy libraries.
gulp.task('package:images', () => {
    'use strict';

    let sourcePath = path.join(config.development.paths.images, '**/*');
    let destinationPath = config.package.paths.images;

    return gulp
        .src([sourcePath])
        .pipe(gulp.dest(destinationPath));
});
