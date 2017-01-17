'use strict';

// Modules.
let path = require('path');

// Configuration.
let config = {
    development: {
        paths: {
            root: path.join(__dirname, '/'),
            css: path.join(__dirname, '/assets/css/'),
            less: path.join(__dirname, '/assets/less/'),
            fonts: path.join(__dirname, '/assets/fonts/'),
            js: path.join(__dirname, '/assets/js/'),
            tasks: path.join(__dirname, '/tasks/')
        }
    }
};

module.exports = config;
