// Modules.
let gulp = require('gulp'),
    less = require('gulp-less'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    config = require('../../config'),
    path = require('path');

// Build less.
gulp.task('build:less', () => {
    'use strict';

    let lessPath = path.join(config.development.paths.less, 'solitude.less');
    let cssPath = config.development.paths.css;

    return gulp.src([lessPath])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 5%', 'ie < 10'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .on('error', gutil.log)
        .pipe(gulp.dest(cssPath));
});
