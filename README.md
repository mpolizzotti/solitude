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