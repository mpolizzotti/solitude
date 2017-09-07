// Modules.
let gulp = require('gulp'),
    requireDir = require('require-dir'),
    runSequence = require('gulp-run-sequence');

// Require all tasks within tasks directory, including subfolders.
requireDir('./build', { recurse: true });
requireDir('./copy', { recurse: true });
requireDir('./test', { recurse: true });
requireDir('./develop', { recurse: true });
requireDir('./package', { recurse: true });

// gulp command.
gulp.task('default', () => {
    'use strict';

    runSequence(
        'build'
    );
});

// gulp build command.
gulp.task('build', () => {
    'use strict';

    runSequence(
        'copy:lib',
        'copy:fonts',
        'build:less',
        'build:js'
    );
});

// gulp test command.
gulp.task('test', () => {
    'use strict';

    runSequence(
        'test:jscs',
        'test:jshint',
        'test:karma'
    );
});

// gulp package command.
gulp.task('package', () => {
    'use strict';

    runSequence(
        'build',
        'package:clean',
        'package:css',
        'package:fonts',
        'package:js',
        'package:images',
        'package:partials',
        'package:templates',
        'package:zip'
    );
});

// gulp watch command.
gulp.task('watch', () => {
    'use strict';

    runSequence(
        'develop:watch'
    );
});
