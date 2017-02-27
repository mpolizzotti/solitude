const MODULE_NAME = 'solitude.navigation.service';

/**
* The NavigationService class manages the opening and closing of
* the sidebar navigation menu.
*
* @class
* @type Class
* @return public API
 */
export class NavigationService {
    constructor() {
        this.isNavigationOpen = false;
        this.cacheNodes();
        this.prepareDOM();
        this.bindEventListeners();
    }

    checkNodes() {
        let nodes = true;

        if (this.siteWrapper.length === 0 || this.menuButton.length === 0 ||
            this.navigationSidebarMask.length === 0 || this.navigationClose.length === 0) {
                console.info('NavigationService. Missing DOM nodes. The navigation menu is inoperable.');
                nodes = false;
        }

        return nodes;
    }

    cacheNodes() {
        this.siteWrapper = $('#siteWrapper');
        this.menuButton = $('#menuButton');
        this.navigationSidebarMask = $('#navigationSidebarMask');
        this.navigationClose = $('#navigationClose');
    }

    prepareDOM() {
        if (!this.checkNodes()) {
            return;
        }

        this.siteWrapper.addClass('navigation-close');
    }

    toggleNavigationMenu() {
        if (!this.checkNodes()) {
            return;
        }

        this.isNavigationOpen = !this.isNavigationOpen;
        if (!this.isNavigationOpen) {
            this.siteWrapper.removeClass('navigation-open').addClass('navigation-close');
            this.menuButton.focus();
        } else {
            this.siteWrapper.removeClass('navigation-close').addClass('navigation-open');
            this.navigationClose.focus();
        }
    }

    bindEventListeners() {
        if (!this.checkNodes()) {
            return;
        }

        this.menuButton.off().on('click', (e) => this.toggleNavigationMenu(e));
        this.navigationClose.off().on('click', (e) => this.toggleNavigationMenu(e));
    }
}
