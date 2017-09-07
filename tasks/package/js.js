// Modules.
let gulp = require('gulp'),
    config = require('../../config'),
    path = require('path');

// Helper.
function copyHelper(source, destination) {
    'use strict';

    return gulp
        .src([source])
        .pipe(gulp.dest(destination));
}

    // Copy libraries.
gulp.task('package:js', () => {
    'use strict';

    let jsLibSourcePath = path.join(config.development.paths.js, 'lib/**/*');
    let jsMinSourcePath = path.join(config.development.paths.js, 'min/**/*');

    let jsLibDestPath = path.join(config.package.paths.js, 'lib/');
    let jsMinDestPath = path.join(config.package.paths.js, 'min/');

    let files = [
        {source: jsLibSourcePath, dest: jsLibDestPath},
        {source: jsMinSourcePath, dest: jsMinDestPath},
    ];

    for (let i = 0; i < files.length; i++) {
        copyHelper(files[i].source, files[i].dest);
    }
});
