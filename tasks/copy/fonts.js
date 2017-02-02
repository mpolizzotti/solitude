// Modules.
let gulp = require('gulp'),
    config = require('../../config'),
    path = require('path');

// Helper.
function copyFontsHelper(source, destination) {
    return gulp
        .src([source])
        .pipe(gulp.dest(destination));
}

// Copy libraries.
gulp.task('copy:fonts', () => {
    'use strict';

    let bootstrapFontSourcePath = path.join(config.development.paths.root, 'node_modules/bootstrap/fonts/**/*');
    let fontAwesomeFontSourcePath = path.join(config.development.paths.root, 'node_modules/font-awesome/fonts/**/*');
    let bootstrapFontDestPath = path.join(config.development.paths.fonts, 'bootstrap/');
    let fontAwesomeFontDestPath = path.join(config.development.paths.fonts, 'font-awesome/');

    let fonts = [
        {source: bootstrapFontSourcePath, dest: bootstrapFontDestPath},
        {source: fontAwesomeFontSourcePath, dest: fontAwesomeFontDestPath},
    ];

    for (let i = 0; i < fonts.length; i++) {
        copyFontsHelper(fonts[i].source, fonts[i].dest);
    }
});
