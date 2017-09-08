// Modules.
let gulp = require('gulp'),
    jsonFile = require('jsonfile'),
    config = require('../../config'),
    path = require('path');

// Package libraries.
gulp.task('package:package', () => {
    'use strict';

    jsonFile.spaces = 4;
    let destinationFile = path.join(config.package.paths.theme, 'package.json');

    let packageObj = {
        name: "solitude",
        version: "1.0.0",
        description: "Solitude is a modern and responsive theme for the ghost blogging platform.",
        main: "index.hbs",
        repository: {
            type: "git",
            url: "git+https://github.com/mpolizzotti/solitude.git"
        },
        author: {
            name: "Matthew Polizzotti",
            email: "matthew.polizzotti@gmail.com"
        },
        license: "AGPL-3.0",
        bugs: {
            url: "https://github.com/mpolizzotti/solitude/issues"
        },
        homepage: "https://github.com/mpolizzotti/solitude#readme"
    };

    jsonFile.writeFile(destinationFile, packageObj, (err) => {
        if (err) {
            console.error('The package.json file was not written due to an error.', err);
        }
    });
});
