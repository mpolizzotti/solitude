// Modules.
let ghostConfig = require('./config');

// Configuration.
module.exports = (config) => {
    'use strict';

    // Paths.
    let basePath = ghostConfig.development.paths.js;

    // Libs.
    let jquery = '../../node_modules/jquery/dist/jquery.min.js';
    let lodash = '../../node_modules/lodash/lodash.min.js';
    let babelPolyfill = '../../node_modules/babel-polyfill/dist/polyfill.js';

    // Source & test code.
    let codePath = 'src/**/*.js';

    config.set({
        basePath: basePath,
        frameworks: ['jasmine'],
        files: [
            {pattern: babelPolyfill, included: true},
            {pattern: jquery, included: true},
            {pattern: lodash, included: true},
            codePath
        ],
        exclude: [],
        preprocessors: {
            [codePath]: ['babel']
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                plugins: ['transform-es2015-modules-umd'],
                sourceMap: 'inline'
            }
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity
  });
};
