
# Solitude
This repository houses a modern and minimalist theme for the [Ghost](https://ghost.org/) blogging platform. In addition, this repository houses a development setup that can be leveraged to customize the Solitude theme and it's associated features.

----------

# Setting Up

## Install Node & NPM
The Ghost platform as well as the Solitude theme make use of [node.js](http://nodejs.org/) and [npm](https://npmjs.org/), a package manager for installing node modules. The latest releases of node ships with npm so only a node installation is required. Node offers platform installers for both Windows and Mac OSX. They also offer binaries for Windows, Mac OSX and Linux systems. Visit the [download](http://nodejs.org/download/) page for more information.

To verify your node installation, open a terminal and enter the `node -v` command:

    node -v // example output: v6.10.2

To verify your npm installation, open a terminal and enter the `npm -v` command:

    npm -v // example output: 3.10.10

## Install Ghost
The next thing you'll need to do is setup a local development environment for Ghost. This guide assumes that you have setup a local instance of the Ghost blogging platform using [Ghost-CLI](https://docs.ghost.org/v1.0.0/docs/install-local). Please follow the [installation instructions](https://docs.ghost.org/v1.0.0/docs/install-local) before moving forward with the rest of this guide.

## Install Solitude
Once a local instance of Ghost is running you can install the Solitude theme.

Navigate to the `themes` directory of your local Ghost installation.

	cd path/to/ghost/content/themes

Clone the Solitude theme into the `themes` directory.

	git clone git@github.com:mpolizzotti/solitude.git (ssh)
	git clone https://github.com/mpolizzotti/solitude.git (https)

## Install Solitude Dependencies
Once the Solitude theme has been pulled down locally you will need to install all of the node modules leveraged by the theme. You can view all of the module dependencies by examining the **package.json** file located at the root of the theme.

To install node modules:

Open a terminal window and navigate to the root of the Solitude theme.

    cd path/to/ghost/content/themes/solitude

Run the `npm install` command. (You must run the `npm install` command in the same directory that contains the package.json file).

    npm install

Depending upon your system permissions, you may need to run the `npm install` as root.

    sudo npm install
    
You also need to install gulp with the `-g` parameter. The `-g` installs gulp globally so it is accessible across all projects.

    npm install -g gulp

Once complete, the **node_modules** directory, containing all of the theme's node modules will be added to the theme directory structure.

## Configure me.js
Outside of a few fields, the Ghost platform does not provide the ability for an author to store and retrieve additional data such as an email address, occupation titles or social media links outside of Twitter and Facebook. The Solitude theme requires this additional metadata to build out portions of the theme, however, we didn't want to hard-code author-specific values into the theme. To solve this issue, the Solitude theme ships with a `me.template.js` file. The `me.template.js` contains additional author properties such as `firstName`, `lastName`, `email` and other properties. The values contained within the `me.template.js` file are used to populate portions of the **header**, **footer** and **slide out menu**. By default the `me.template.js` file contains empty values as it is only a template. To configure the `me` context perform the following actions:

From a terminal window navigate to the `me` component directory.

	cd path/to/ghost/content/themes/solitude/assets/js/src/components/me

Copy the `me.template.js` and rename it `me.js`

	cp me.template.js me.js

Populate the author properties within the `me.js` file.

	const MODULE_NAME = "solitude.me";
	
	export const ME = {
	    firstName: "Tiberius",
	    lastName: "Kirk",
	    primaryOccupation: "Starfleet Officer",
	    secondaryOccupation: "Chairmen of the United Federation of Planets",
	    email: "tkirk@starfleet.com",
	    fullBio: "The only student at Starfleet Academy to defeat the Kobayashi Maru.",
	    social: [
	        {
	            label: "Twitter",
	            href: "https://twitter.com/<username-identifier>",
	            className: "twitter",
	        },
	        {
	            label: "Google+",
	            href: "https://plus.google.com/u/0/<username-identifier>",
	            className: "google-plus",
	        },
	        {
	            label: "Linkedin",
	            href: "https://www.linkedin.com/in/<username-identifier>",
	            className: "linkedin",
	        },
	        {
	            label: "Github",
	            href: "https://github.com/<username-identifier>",
	            className: "github"
	        },
	        {
	            label: "Codepen",
	            href: "https://codepen.io/<username-identifier>",
	            className: "codepen"
	        }
	    ]
	};

Once the `me.js` file is in place you can build the theme.

## Build
The `npm run build` command runs several operations for the Solitude theme, such as copying fonts, compiling css and transpiling and minifying JavaScript code into their respective sub-directories of the `/assets` theme directory. The Solitude theme is configured to always run with compressed, transpiled and minified code. For debugging purposes, source maps are also provided (_Source maps are stripped out of the build with the `npm run package` command_).

To **build** the Solitude theme perform the following actions:

From a terminal window navigate to the root of the `solitude` theme.

	cd path/to/ghost/content/themes/solitude

Run the `npm run build` command.

	npm run build

## Watch
The `npm run watch` command will watch for changes to the theme's **Less** and **JavaScript** files and automatically recompile those assets into their respective sub-directories under the `/assets` directory.

To run a **watch** on the Solitude theme perform the following actions:

From a terminal window navigate to the root of the `solitude` theme.

	cd path/to/ghost/content/themes/solitude

Run the `npm run watch` command.

	npm run watch

You can exit the watch using `ctrl + c`.

##Lint
The Solitude theme also ships with linting and formatting rules based upon [jshint](http://jshint.com/) and [jscs](http://jscs.info/) rules and styleguides.

To run **linting** on the Solitude theme perform the following actions:

From a terminal window navigate to the root of the `solitude` theme.

	cd path/to/ghost/content/themes/solitude

Run the `npm run test` command.

	npm run test

The `test` command will execute both `gulp test:jshint` and `gulp:jscs` tasks.
