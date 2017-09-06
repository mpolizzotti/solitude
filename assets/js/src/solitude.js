import {NavigationService} from './components/navigation/navigation.service';
import {CommentsService} from './components/comments/comments.service'
import {TagsService} from './components/tags/tags.service';
import {MeMappingService} from './components/me/me.mapping.service';
import {TwitterService} from './components/twitter/twitter.service';
import {PageLoaderService} from './components/page-loader/page.loader.service'

/**
* Top-level class for the Solitude theme. This class bootstraps
* the required JavaScript needed to run the Solitude theme.
*/
export class Solitude {
    constructor() {
        // Theme version.
        this._version = '1.0.0';

        // Enable navigation (sidebar) menu.
        this.navigationService = new NavigationService();

        // Manage rendering of unique tags.
        this.tagsService = new TagsService();

        // Manage rendering of twitter feed.
        this.twitterService = new TwitterService();

        // Map external 'me' context to templates.
        this.meMappingService = new MeMappingService();

        // Enable comments for author posts.
        this.commentsService = new CommentsService();

        // Reveal interface after site has loaded.
        this.pageLoaderService = new PageLoaderService();
        this.pageLoaderService.hide();
    }

    get version() {
        return this._version;
    }
}

// Bootstrap.
$(() => {
    'use strict';
    window.solitude = {};
    let solitude = new Solitude();

    window.solitude.version = solitude.version;
});
