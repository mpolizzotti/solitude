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
        description: "Solitude is a modern and responsive theme for the ghost blogging platform.",
        version: "1.0.0",
        main: "index.hbs",
        engines: {
            ghost: ">=1.0.0"
        },
        license: "MIT",
        author: {
            name: "Matthew Polizzotti",
            email: "matthew.polizzotti@gmail.com",
            url: "matthewpolizzotti.com"
        },
        config: {
            posts_per_page: 10
        },
        gpm: {
            type: "theme",
            categories: [
                "Minimal",
                "Personal Blogs"
            ]
        },
        screenshots: {
            desktop: "assets/screenshot-desktop.jpg",
            mobile: "assets/screenshot-mobile.jpg"
        },
        repository: {
            type: "git",
            url: "git+https://github.com/mpolizzotti/solitude.git"
        },
        bugs: {
            url: "https://github.com/mpolizzotti/solitude/issues"
        },
        homepage: "https://github.com/mpolizzotti/solitude#readme",
        demo: "matthewpolizzotti.com"
    };

    jsonFile.writeFile(destinationFile, packageObj, (err) => {
        if (err) {
            console.error('The package.json file was not written due to an error.', err);
        }
    });
});
