// Modules.
let gulp = require('gulp'),
    del = require('del'),
    config = require('../../config'),
    path = require('path');

// Clean directory.
gulp.task('package:clean', () => {
    'use strict';

    let packageDirectory = path.join(config.package.paths.root, '**/*');

    return del([packageDirectory]);
});

// Clean maps.
gulp.task('package:clean:maps', () => {
    'use strict';

    let solitudeMaps = path.join(config.package.paths.js, 'min/solitude.min.js.map');

    return del([solitudeMaps]);
});
