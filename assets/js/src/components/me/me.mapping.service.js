import {MeService} from './me.service';

const MODULE_NAME = 'solitude.me.mapping.service';

/**
* The meMapping class maps external user data from the me.service
* to the underlying templates. The Ghost blogging platform does
* not expose all the user data desired at this time. This
* implementation may become obsolete in the future.
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
            } else if (key === 'social') {
                this.mapToSocial(key, me[key]);
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

    mapToSocial(key, value) {
        if (!key && !value) {
            return false;
        }

        let nodes = document.querySelectorAll(`ul[id^=${key}]`);
        let socialList = value;
        let template = '';

        if (!nodes.length) {
            return false;
        }

        socialList.forEach((social) => {
            template +=
                `<li class="social-media-list-item">
                    <a class="social-media-icon" href="${social.href}" target="_blank" title="${social.label}">
                        <i class="fa fa-${social.className}"><span class="sr-only">${social.label}</span></i>
                    </a>
                </li>`;
        });

        nodes = Array.from(nodes);
        nodes.forEach((node) => node.innerHTML = template);
    }
}
