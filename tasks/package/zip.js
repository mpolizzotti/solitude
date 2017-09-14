// Modules.
let gulp = require('gulp'),
    jsonFile = require('jsonfile'),
    zip = require('gulp-zip'),
    config = require('../../config'),
    path = require('path');

// Package libraries.
gulp.task('package:zip', () => {
    'use strict';

    let packageFile = path.join(config.development.paths.root, 'package.json');
    let sourcePath = path.join(config.package.paths.theme, '**/*');
    let destinationPath = config.package.paths.root;
    let packageObj = {};
    let fileName;

    jsonFile.readFile(packageFile, (err, obj) => {
        if (err) {
            console.error('Failed to read the package.json file due to an error.', err);
            return;
        }

        packageObj = Object.assign(packageObj, obj);
        delete packageObj.scripts;
        delete packageObj.dependencies;
        delete packageObj.devDependencies;

        fileName = `solitude.${packageObj.version}.zip`;

        return gulp.src(sourcePath)
            .pipe(zip(fileName))
            .pipe(gulp.dest(destinationPath));
    });
});
