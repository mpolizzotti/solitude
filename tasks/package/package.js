// Modules.
let gulp = require('gulp'),
    jsonFile = require('jsonfile'),
    config = require('../../config'),
    path = require('path');

// Package libraries.
gulp.task('package:package', () => {
    'use strict';

    jsonFile.spaces = 4;
    let sourceFile = path.join(config.development.paths.root, 'package.json');
    let destinationFile = path.join(config.package.paths.theme, 'package.json');
    let packageObj = {};

    jsonFile.readFile(sourceFile, (err, obj) => {
        if (err) {
            console.error('Failed to read the package.json file due to an error.', err);
            return;
        }

        packageObj = Object.assign(packageObj, obj);
        delete packageObj.scripts;
        delete packageObj.dependencies;
        delete packageObj.devDependencies;

        jsonFile.writeFile(destinationFile, packageObj, (err) => {
            if (err) {
                console.error('The package.json file was not written due to an error.', err);
                return;
            }
        });

    });
});
