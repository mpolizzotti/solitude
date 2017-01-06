'use strict';

let path = require('path'),
    config;

config = {
    development: {
        paths: {
            css: path.join(__dirname, '/assets/css/'),
            less: path.join(__dirname, 'assets/less/'),
            js: path.join(__dirname, 'assets/js/')
        }
    }
};

module.exports = config;
