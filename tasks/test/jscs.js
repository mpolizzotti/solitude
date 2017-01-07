// Modules.
let gulp = require('gulp'),
    stylish = require('jscs-stylish'),
    jscs = require('gulp-jscs'),
    config = require('../../config'),
    path = require('path');

gulp.task('test:checkstyle', () => {
    'use strict';

    let rootPath = path.join(config.development.paths.root, '*.js');
    let sourcePath = path.join(config.development.paths.js, 'src/**/*.js');
    let taskPath = path.join(config.development.paths.tasks, '**/*.js');

    return gulp
        .src([rootPath, sourcePath, taskPath])
        .pipe(jscs('.jscsrc'))
        .pipe(jscs.reporter(stylish));
});
