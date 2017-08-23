import {MeService} from './me.service';

const MODULE_NAME = 'solitude.me.mapping.service';

/**
* The meMapping class maps external user data from the me.service
* to the underlying templates. The Ghost blogging platform does
* not expose all the user data desired at this time. This
* implementation may become obsolete in time.
*
* @class
* @type Class
* @return public API
 */
export class MeMappingService {
    constructor() {
        this.meService = new MeService();
        let me = this.meService.getMe();
        for (let key in me) {
            if (key === 'email') {
                this.mapToEmail(key, me[key]);
            } else if (key === 'fullBio') {
                this.mapToFullBio(key, me[key]);
            } else {
                this.mapToNode(key, me[key]);
            }
        }
    }

    mapToNode(key, value) {
        if (!key && !value) {
            return false;
        }

        let nodes = document.querySelectorAll(`span[id^=${key}]`);

        if (!nodes.length) {
            return false;
        }

        nodes = Array.from(nodes);
        nodes.forEach((node) => node.textContent = value);
    }

    mapToEmail(key, value) {
        if (!key && !value) {
            return false;
        }

        let nodes = document.querySelectorAll(`a[id^=${key}]`);

        if (!nodes.length) {
            return false;
        }

        nodes = Array.from(nodes);
        nodes.forEach((node) => {
            node.setAttribute('href', `mailto:${value}`);
            node.textContent = value;
        });
    }

    mapToFullBio(key, value) {
        if (!key && !value) {
            return false;
        }

        let nodes = document.querySelectorAll(`span[id^=${key}]`);

        if (!nodes.length) {
            return false;
        }

        nodes = Array.from(nodes);
        nodes.forEach((node) => node.innerHTML = value);
    }
}
