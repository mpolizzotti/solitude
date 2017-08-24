import * as keyCodes from '../keyboard/keyCodes.service';

const MODULE_NAME = 'solitude.restrict.tabbing.service';

/**
* The RestrictTabbingService class restricts keyboard tabbing, when enabled,
* to the rootNode passed into the RestrictTabbingService class.
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

        if (!this.rootNode || !this.body || this.selectors.length === 0) {
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

        this.body = document.querySelector('body');

        // The :scope syntax, used in conjunction with querySelectorAll is not yet supported by IE11.
        this.selectors = this.rootNode.querySelectorAll('a, button');
        this.selectors = _.map(this.selectors, (node) => {
            node.setAttribute('data-tabbing-id', _.uniqueId());
            return node;
        });
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

        this.body.addEventListener('keydown', this.keyDownListener, false);
    }

    disable() {
        if (!this.checkNodes()) {
            return;
        }

        this.body.removeEventListener('keydown', this.keyDownListener, false);
    }

    calculateKeyDownFocus(e) {
        if (!this.checkNodes()) {
            return;
        }

        if (!e) {
            console.info('RestrictTabbingService. Missing event.');
            return;
        }

        let firstSelector = this.selectors[0],
            firstSelectorId = firstSelector.getAttribute('data-tabbing-id'),
            activeElement = document.activeElement,
            activeElementId = activeElement.getAttribute('data-tabbing-id'),
            shiftKey = e.shiftKey,
            position = 0;

        if (!activeElementId) {
            activeElement = firstSelector;
            activeElementId = firstSelectorId;
        }

        for (let i = 0; i < this.selectors.length; i++) {
            let selectorId = this.selectors[i].getAttribute('data-tabbing-id');

            if (activeElementId === selectorId) {
                if (!shiftKey) {
                    position = (i + 1);
                    if (position >= this.selectors.length) {
                        position = 0;
                    }
                } else {
                    position = (i - 1);
                    if (position < 0) {
                        position = (this.selectors.length - 1);
                    }
                }

                this.selectors[position].focus();
            }
        }
    }

    keyDownListener(e) {
        if (!this.checkNodes()) {
            return;
        }

        if (!e) {
            console.info('RestrictTabbingService. Missing event.');
            return;
        }

        if (e.keyCode === keyCodes.TAB) {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.calculateKeyDownFocus(e)
        }
    }
}
