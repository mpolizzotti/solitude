// Modules.
let gulp = require('gulp'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    config = require('../../config'),
    path = require('path');

// Build js.
gulp.task('browserify:js', () => {
    'use strict';

    let sourcePath = path.join(config.development.paths.js, 'src/solitude.js');
    let destinationPath = path.join(config.development.paths.js, 'min/');
    let b = browserify({entries: sourcePath, extensions: ['.js'], debug: true});

    return b.transform('babelify', {presets: ['es2015']})
        .bundle()
        .pipe(source('solitude.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destinationPath));
});
