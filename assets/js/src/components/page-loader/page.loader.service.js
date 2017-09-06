const MODULE_NAME = 'solitude.page.loader.service';

/**
* The PageLoaderService class manages and manipulates the showing
* and hiding of the top-level page loader or spinner.
 */
export class PageLoaderService {
    constructor() {
        this.cacheNodes();
    }

    checkNodes() {
        let nodes = true;

        if (!this.pageLoader || !this.pageLoaderBackdrop || !this.pageLoaderSpinner) {
            nodes = false;
        }

        return nodes;
    }

    cacheNodes() {
        this.pageLoaderTimeout = undefined;
        this.pageLoader = document.querySelector('#pageLoader');
        this.pageLoaderBackdrop = this.pageLoader.querySelector('#pageLoaderBackdrop');
        this.pageLoaderSpinner = this.pageLoader.querySelector('#pageLoaderSpinner');
    }

    hide() {
        if (!this.checkNodes) {
            return false;
        }

        if (this.pageLoaderTimeout) {
            window.clearTimeout(this.pageLoaderTimeout);
        }
        this.pageLoaderTimeout = setTimeout(() => {
            this.pageLoader.classList.add('page-loader-fade');
            let t = setTimeout(() => this.pageLoader.classList.add('page-loader-hide'), 0);
        }, 500);
    }

    show() {
        if (!this.checkNodes) {
            return false;
        }

        if (this.pageLoaderTimeout) {
            window.clearTimeout(this.pageLoaderTimeout);
        }
        this.pageLoaderTimeout = setTimeout(() => {
            this.pageLoader.classList.remove('page-loader-hide');
            let t = setTimeout(() => this.pageLoader.classList.remove('page-loader-fade'), 0);
        }, 500);
    }
}
