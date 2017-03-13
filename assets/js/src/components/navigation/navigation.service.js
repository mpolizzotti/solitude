import {RestrictTabbingService} from '../keyboard/restrict.tabbing.service';

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

        if (!this.siteWrapper || !this.menuButton ||
            !this.navigationSidebarMask || !this.navigationClose) {
                console.info('NavigationService. Missing DOM nodes. The navigation menu is inoperable.');
                nodes = false;
        }

        return nodes;
    }

    cacheNodes() {
        this.siteWrapper = document.querySelector('#siteWrapper');
        this.menuButton = document.querySelector('#menuButton');
        this.navigationSidebar = document.querySelector('#navigationSidebar');
        this.navigationSidebarMask = document.querySelector('#navigationSidebarMask');
        this.navigationClose = document.querySelector('#navigationClose');
    }

    prepareDOM() {
        if (!this.checkNodes()) {
            return;
        }

        this.siteWrapper.classList.add('navigation-close');
        this.restrictTabbingService = new RestrictTabbingService(this.navigationSidebar);
    }

    toggleNavigationMenu(e) {
        if (!this.checkNodes()) {
            return;
        }

        this.isNavigationOpen = !this.isNavigationOpen;
        if (!this.isNavigationOpen) {
            this.siteWrapper.classList.remove('navigation-open');
            this.siteWrapper.classList.add('navigation-close');
            this.restrictTabbingService.disable();
            this.menuButton.focus();
        } else {
            this.siteWrapper.classList.remove('navigation-close');
            this.siteWrapper.classList.add('navigation-open');
            this.restrictTabbingService.enable();
            this.navigationClose.focus();
        }
    }

    bindEventListeners() {
        if (!this.checkNodes()) {
            return;
        }

        this.menuButton.removeEventListener('click', false);
        this.menuButton.addEventListener('click', (e) => this.toggleNavigationMenu(e), false);

        this.navigationClose.removeEventListener('click', false);
        this.navigationClose.addEventListener('click', (e) => this.toggleNavigationMenu(e), false);
    }
}
