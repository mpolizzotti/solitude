const MODULE_NAME = 'solitude.navigation.service';

/**
* Class level comment.
*
* @class
* @type Class
* @return public API
 */
export default class NavigationService {
    constructor() {
        this.isNavigationOpen = false;
        this.cacheNodes();
        this.prepareDOM();
        this.bindEventListeners();
    }

    cacheNodes() {
        this.body = $('body');
        this.navigationMenu = $('#navigationMenu');
        this.menuButton = $('#menuButton');
    }

    prepareDOM() {
        if (this.body.length === 0) {
            console.info('NavigationService. Missing DOM node. The body tag cannot be found.');
            this.navigationMenu.hide();
            return;
        }

        this.body.addClass('navigation-close');
    }

    onSelectMenuButton(e) {
        this.isNavigationOpen = !this.isNavigationOpen;

        if (!this.isNavigationOpen) {
            this.body.removeClass('navigation-open').addClass('navigation-close');
        } else {
            this.body.removeClass('navigation-close').addClass('navigation-open');
        }
    }

    bindEventListeners() {
        if (this.body.length === 0 || this.menuButton.length === 0) {
            console.info('NavigationService. Missing DOM nodes. The navigation menu is inoperable and will be hidden.');
            this.navigationMenu.hide();
            return;
        }

        this.menuButton.off().on('click', (e) => this.onSelectMenuButton(e));
    }
}
