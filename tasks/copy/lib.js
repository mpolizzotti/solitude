// Modules.
let gulp = require('gulp'),
    config = require('../../config'),
    path = require('path');

// Copy libraries.
gulp.task('copy:lib', () => {
    'use strict';

    let jquery = path.join(config.development.paths.root, 'node_modules/jquery/dist/jquery.min.js');
    let lodash = path.join(config.development.paths.root, 'node_modules/lodash/lodash.min.js');
    let libPath = path.join(config.development.paths.js, 'lib/');

    return gulp
        .src([jquery, lodash])
        .pipe(gulp.dest(libPath));
});
