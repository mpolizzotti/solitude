// Modules.
let gulp = require('gulp'),
    zip = require('gulp-zip'),
    config = require('../../config'),
    path = require('path');

// Copy libraries.
gulp.task('package:zip', () => {
    'use strict';

    let sourcePath = path.join(config.package.paths.theme, '**/*');
    let destinationPath = config.package.paths.root;

    return gulp.src(sourcePath)
        .pipe(zip('solitude.zip'))
        .pipe(gulp.dest(destinationPath));
});
