// Modules.
let gulp = require('gulp'),
    Karma = require('karma').Server,
    config = require('../../config'),
    path = require('path');

// Karma tests.
gulp.task('test:karma', function(done) {
    'use strict';

    let karmaPath = path.join(config.development.paths.root, 'karma.conf.js');
    new Karma(
        {configFile: karmaPath, singleRun: true},
        function () {done();}
    ).start();
});
