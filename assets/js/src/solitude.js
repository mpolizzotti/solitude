import {NavigationService} from './components/navigation/navigation.service';
import {TagsService} from './components/tags/tags.service';
import {PageLoaderService} from './components/page-loader/page.loader.service'

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
        // Theme name.
        this._name = 'Solitude';

        // Theme version.
        this._version = '1.0.0';

        // Enable navigation (sidebar) menu.
        this.navigationService = new NavigationService();

        // Enforce unique tags when exposed.
        this.tagsService = new TagsService();

        // Reveal interface after site has loaded.
        this.pageLoaderService = new PageLoaderService();
        this.pageLoaderService.hide();
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
