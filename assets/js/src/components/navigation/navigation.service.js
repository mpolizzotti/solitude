import {RestrictTabbingService} from '../keyboard/restrict.tabbing.service';

const MODULE_NAME = 'solitude.navigation.service';

/**
* The NavigationService class manages the opening and closing of
* the sidebar navigation menu.
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

        if (!this.body || !this.siteWrapper || !this.menuButton ||
            !this.navigationSidebarMask || !this.navigationClose) {
                console.info('NavigationService. Missing DOM nodes. The navigation menu is inoperable.');
                nodes = false;
        }

        return nodes;
    }

    cacheNodes() {
        this.body = document.querySelector('body');
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

    onTouchMove(e) {
        if (!this.checkNodes()) {
            return;
        }

        e.preventDefault();
    }

    toggleNavigationMenu(e) {
        if (!this.checkNodes()) {
            return;
        }

        this.isNavigationOpen = !this.isNavigationOpen;
        if (!this.isNavigationOpen) {
            this.siteWrapper.classList.remove('navigation-open');
            this.siteWrapper.classList.add('navigation-close');
            this.body.classList.remove('no-scroll');
            this.body.addEventListener('touchmove', this.onTouchMove, false);
            this.restrictTabbingService.disable();
            this.menuButton.focus();
        } else {
            this.siteWrapper.classList.remove('navigation-close');
            this.siteWrapper.classList.add('navigation-open');
            this.body.classList.add('no-scroll');
            this.body.removeEventListener('touchmove', this.onTouchMove, false);
            this.restrictTabbingService.enable();
            this.navigationClose.focus();
        }
    }

    bindEventListeners() {
        if (!this.checkNodes()) {
            return;
        }

        if (this.menuButton && this.menuButton.hasOwnProperty('removeEventListener')) {
            this.menuButton.removeEventListener('click', false);
        }
        this.menuButton.addEventListener('click', (e) => this.toggleNavigationMenu(e), false);

        if (this.navigationClose && this.navigationClose.hasOwnProperty('removeEventListener')) {
            this.navigationClose.removeEventListener('click', false);
        }
        this.navigationClose.addEventListener('click', (e) => this.toggleNavigationMenu(e), false);
    }
}
