// Module.
let gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    errorlog = require('gulp-jshint-file-reporter'),
    config = require('../../config'),
    path = require('path');

// Lint.
gulp.task('test:lint', () => {
    'use strict';

    let rootPath = path.join(config.development.paths.root, '*.js');
    let sourcePath = path.join(config.development.paths.js, 'src/**/*.js');
    let taskPath = path.join(config.development.paths.tasks, '**/*.js');

    return gulp.src([rootPath, sourcePath, taskPath])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter(errorlog));
});
