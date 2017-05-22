import {UtilService} from '../util/util.service';

const MODULE_NAME = 'solitude.tags.service';

/**
* The TagsService class manages manipulates rendered tags
* on the author page to make them unique. Outputting unique
* tags is not yet supported by Ghost and this implementation
* provides a solution to resolve this issue.
*
* @class
* @type Class
* @return public API
 */
export class TagsService {
    constructor() {
        this.cacheNodes();
        this.injectUniqueTags(this.buildUniqueTagsMap());
    }

    checkNodes() {
        let nodes = true;

        if (!this.tagsList || !this.tags || !this.tagsEmpty || !this.tagsLoader) {
            console.info('TagsService. Missing DOM nodes. Tags rendered to end users will not be unique.');
            nodes = false;
        }

        return nodes;
    }

    cacheNodes() {
        this.tagsList = document.querySelector('#tagsList');
        this.tags = this.tagsList.querySelectorAll(':scope li');
        this.tagsEmpty = document.querySelector('#tagsEmpty');
        this.tagsLoader = document.querySelector('#tagsLoader');
    }

    buildUniqueTagsMap() {
        if (!this.checkNodes()) {
            return;
        }

        let tags = Array.from(this.tags);
        let uniqueMap = {};

        tags.forEach((li, idx) => {
            let label = li.querySelector('a').innerHTML;
            label = label.toLowerCase();
            if (!_.has(uniqueMap, label)) {
                uniqueMap[label] = li;
            }
        });

        return uniqueMap;
    }

    injectUniqueTags(tagsMap) {
        if (!this.checkNodes() || !tagsMap) {
            return;
        }

        if (_.isEmpty(tagsMap)) {
            this.tagsEmpty.classList.remove('hidden');
            return;
        }

        this.tagsList.innerHTML = '';
        for (let tag in tagsMap) {
            this.tagsList.appendChild(tagsMap[tag]);
        }
        this.tagsLoader.classList.add('tags-loaded');
    }
}
