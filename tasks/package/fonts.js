// Modules.
let gulp = require('gulp'),
    config = require('../../config'),
    path = require('path');

// Copy libraries.
gulp.task('package:fonts', () => {
    'use strict';

    let sourcePath = path.join(config.development.paths.fonts, '**/*');
    let destinationPath = config.package.paths.fonts;

    return gulp
        .src([sourcePath])
        .pipe(gulp.dest(destinationPath));
});
