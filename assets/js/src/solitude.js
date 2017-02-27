import {NavigationService} from './components/navigation/navigation.service';

/**
* Top-level class for the Solitude theme. This class bootstraps
* the required JavaScript needed to run the Solitude theme.
*
* @class
* @type Class
* @return public API
 */
export class Solitude {
    constructor() {
        this._name = 'Solitude';
        this._version = '1.0.0';

        // Enable navigation (sidebar) menu.
        this.navigationService = new NavigationService();
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get version() {
        return this._version;
    }

    set version(newVersion) {
        this._version = newVersion;
    }
}

// Bootstrap.
$(() => {
    'use strict';
    let solitude = new Solitude();
});
