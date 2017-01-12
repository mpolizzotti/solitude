// Modules.
let gulp = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    config = require('../../config'),
    path = require('path');

// Build js.
gulp.task('build:js', () => {
    'use strict';

    let sourcePath = path.join(config.development.paths.js, 'src/**/!(*.spec).js');
    let destinationPath = path.join(config.development.paths.js, 'min/');

    return gulp
        .src([sourcePath])
        .pipe(sourcemaps.init())
        .pipe(concat('solitude.min.js'))
        .pipe(babel({presets: ['es2015']}))
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destinationPath));
});
