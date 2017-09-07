// Modules.
let gulp = require('gulp'),
    config = require('../../config'),
    path = require('path');

// Copy libraries.
gulp.task('package:partials', () => {
    'use strict';

    let sourcePath = path.join(config.development.paths.partials, '**/*');
    let destinationPath = config.package.paths.partials;

    return gulp
        .src([sourcePath])
        .pipe(gulp.dest(destinationPath));
});
