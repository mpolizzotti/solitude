// Modules.
let gulp = require('gulp'),
    config = require('../../config'),
    path = require('path');

// Copy libraries.
gulp.task('copy:fonts', () => {
    'use strict';

    let bootstrapFonts = path.join(config.development.paths.root, 'node_modules/bootstrap/fonts/**/*');
    let fontAwesomeFonts = path.join(config.development.paths.root, 'node_modules/font-awesome/fonts/**/*');
    let fontsPath = config.development.paths.fonts;

    return gulp
        .src([bootstrapFonts, fontAwesomeFonts])
        .pipe(gulp.dest(fontsPath));
});
