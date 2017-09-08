// Modules.
let gulp = require('gulp'),
    del = require('del'),
    config = require('../../config'),
    path = require('path');

// Package libraries.
gulp.task('package:clean', () => {
    'use strict';

    let packageDirectory = path.join(config.package.paths.root, '**/*');

    return del([packageDirectory]);
});
