const MODULE_NAME = 'solitude.restrict.tabbing.service';

/**
* The RestrictTabbingService class manages...
*
* @class
* @type Class
* @return public API
 */
export class RestrictTabbingService {
    constructor(rootNode) {
        this.rootNode = rootNode;
        this.cacheNodes();
        this.prepareDOM();
        this.keyDownListener = _.bind(this.keyDownListener, this);
    }

    checkNodes() {
        let nodes = true;

        if (!this.rootNode || this.selectors.length === 0) {
            console.info('RestrictTabbingService. Missing DOM nodes. The tabbing service is inoperable.');
            nodes = false;
        }

        return nodes;
    }

    cacheNodes() {
        if (!this.rootNode) {
            console.info('RestrictTabbingService. Missing DOM nodes. The tabbing service is inoperable.');
            return;
        }

        this.selectors = this.rootNode.querySelectorAll(':scope a, :scope button');
    }

    prepareDOM() {
        if (!this.checkNodes()) {
            return;
        }

        this.selectors[0].focus();
    }

    enable() {
        if (!this.checkNodes()) {
            return;
        }

        this.rootNode.addEventListener('keydown', this.keyDownListener, false);
    }

    disable() {
        if (!this.checkNodes()) {
            return;
        }

        this.rootNode.removeEventListener('keydown', this.keyDownListener, false);
    }

    keyDownListener(e) {
        if (!this.checkNodes()) {
            return;
        }

        if (!e) {
            console.info('RestrictTabbingService. Missing event.');
            return;
        }

        console.log('Keydown: ', e);
    }
}
