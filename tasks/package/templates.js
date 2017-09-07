// Modules.
let gulp = require('gulp'),
    config = require('../../config'),
    path = require('path');

// Copy libraries.
gulp.task('package:templates', () => {
    'use strict';

    let sourcePath = path.join(config.development.paths.root, '*.hbs');
    let destinationPath = config.package.paths.theme;

    return gulp
        .src([sourcePath])
        .pipe(gulp.dest(destinationPath));
});
