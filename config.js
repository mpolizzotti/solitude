'use strict';

// Modules.
let path = require('path');

// Configuration.
let config = {
    development: {
        paths: {
            root: path.join(__dirname, '/'),
            css: path.join(__dirname, '/assets/css/'),
            images: path.join(__dirname, '/assets/images/'),
            less: path.join(__dirname, '/assets/less/'),
            fonts: path.join(__dirname, '/assets/fonts/'),
            js: path.join(__dirname, '/assets/js/'),
            tasks: path.join(__dirname, '/tasks/'),
            partials: path.join(__dirname, '/partials/')
        }
    },
    package: {
        paths: {
            root: path.join(__dirname, '/package'),
            theme: path.join(__dirname, '/package/solitude/'),
            css: path.join(__dirname, '/package/solitude/assets/css/'),
            images: path.join(__dirname, '/package/solitude/assets/images/'),
            fonts: path.join(__dirname, '/package/solitude/assets/fonts/'),
            js: path.join(__dirname, '/package/solitude/assets/js/'),
            partials: path.join(__dirname, '/package/solitude/partials/')
        }
    }
};

module.exports = config;
