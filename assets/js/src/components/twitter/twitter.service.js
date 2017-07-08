import {UtilService} from '../util/util.service';

const MODULE_NAME = 'solitude.twitter.service';

/**
* The TwitterService class manages the loading of a twitter feed.
*
* @class
* @type Class
* @return public API
 */
export class TwitterService {
    constructor() {
        this.cacheNodes();
        this.counter = 0;
        this.threshold = 10;
        this.twitterFeed = [];
        this.pollTwitterFeed();
    }

    checkNodes() {
        let nodes = true;

        if (!this.twitterList || !this.twitterContent || !this.twitterLoader) {
            nodes = false;
        }

        return nodes;
    }

    cacheNodes() {
        this.twitterList = document.querySelector('#twitterList');
        this.twitterContent = document.querySelector('#twitterContent');
        this.twitterContentError = document.querySelector('#twitterContentError');
        this.twitterLoader = document.querySelector('#twitterLoader');
    }

    pollTwitterFeed() {
        if (!this.checkNodes()) {
            return false;
        }

        let t = setTimeout(() => {
            let children = this.twitterContent.querySelectorAll(':scope iframe');
            if (children.length === 0) {
                if (this.counter < this.threshold) {
                    this.counter = this.counter + 1;
                    this.pollTwitterFeed();
                } else {
                    children = [];
                    this.counter = 0;
                    this.twitterFeedError();
                }
            } else {
                this.twitterFeed = Array.from(children);
                this.counter = 0;
                this.showTwitterFeed();
            }
        }, 1000);
    }

    showTwitterFeed() {
        if (!this.checkNodes()) {
            return false;
        }

        this.twitterLoader.classList.add('twitter-loaded');
    }

    twitterFeedError() {
        this.twitterContent.classList.add('hidden');
        this.twitterContentError.classList.remove('hidden');
        this.twitterLoader.classList.add('twitter-loaded');
    }
}
