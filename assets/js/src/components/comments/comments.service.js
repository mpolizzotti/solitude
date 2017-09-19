import {MeService} from '../../components/me/me.service';

const MODULE_NAME = 'solitude.comments.service';

/**
* The CommentsService class manages the opening and closing of
* the comments section under each author post. Comments currently
* are driven by the disqus platform.
*
* @class
* @type Class
* @return public API
*/
export class CommentsService {
    constructor() {
        this.isCommentsOpen = false;
        this.counter = 0;
        this.threshold = 10;
        this.disqusFrameExtension = 55;
        this.disqusThreads = [];
        this.meService = new MeService();
        this.cacheNodes();
        this.injectDisqus();
        this.pollDisqusThreads();
    }

    cacheNodes() {
        this.commentsContainer = document.querySelector('#commentsContainer');
        this.commentsToggle = document.querySelector('#commentsToggle');
        this.disqusThread = document.querySelector('#disqus_thread');
        this.disqusConfig = document.querySelector('#disqus_config');
    }

    checkNodes() {
        let nodes = true;

        if (!this.commentsContainer || !this.commentsToggle || !this.disqusThread) {
            nodes = false;
        }

        return nodes;
    }

    injectDisqus() {
        if (!this.checkNodes()) {
            return false;
        }

        var d = document,
            s = d.createElement('script'),
            ns = d.createElement('noscript'),
            name = (`${this.meService.getMe('firstName')}${this.meService.getMe('lastName')}`).toLowerCase();

        s.src = `https://${name}.disqus.com/embed.js`;
        s.setAttribute('data-timestamp', +new Date());
        ns.innerHTML = 'Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>';
        this.commentsContainer.appendChild(s);
        this.commentsContainer.appendChild(ns);
    }

    pollDisqusThreads() {
        if (!this.checkNodes()) {
            return false;
        }

        let t = setTimeout(() => {
            let children = this.disqusThread.querySelectorAll(':scope iframe');
            if (children.length === 0) {
                if (this.counter < this.threshold) {
                    this.counter = this.counter + 1;
                    this.pollDisqusThreads();
                } else {
                    children = [];
                    this.counter = 0;
                    this.hideComments();
                }
            } else {
                this.disqusThreads = Array.from(children);
                this.counter = 0;
                this.showComments();
            }
        }, 1000);
    }

    updateDisqusFrameHeight() {
        if (!this.checkNodes()) {
            return false;
        }

        let t = setTimeout(() => {
            if (this.isCommentsOpen) {
                let commentsHeight = parseInt(this.disqusThread.style.height, 10);
                let frameHeight = parseInt(this.disqusThreads[0].style.height, 10);

                this.disqusThreads[0].style.overflow = 'auto';
                this.disqusThreads[0].style.height = frameHeight;

                if (commentsHeight !== frameHeight) {
                    this.disqusThread.style.height = `${frameHeight + this.disqusFrameExtension}px`;
                    this.disqusThreads[0].style.height = `${frameHeight + this.disqusFrameExtension}px`;
                }

                this.updateDisqusFrameHeight();
            }
        }, 1000);
    }

    hideComments() {
        if (!this.checkNodes()) {
            return;
        }

        this.commentsContainer.classList.add('comments-hide');
        this.commentsContainer.classList.remove('comments-show');
        this.unbindEventListeners();
    }

    showComments() {
        if (!this.checkNodes()) {
            return;
        }

        this.commentsContainer.classList.add('comments-show');
        this.commentsContainer.classList.remove('comments-hide');
        this.bindEventListeners();
    }

    toggleComments(e) {
        if (!this.checkNodes()) {
            return;
        }

        if (this.disqusThread.style.height) {
            this.disqusThread.style.height = null;
            this.disqusThread.classList.add('comments-content-closed');
            this.isCommentsOpen = false;
        } else {
            this.disqusThread.style.height = this.disqusThreads[0].style.height;
            this.disqusThread.classList.remove('comments-content-closed');
            this.isCommentsOpen = true;
            this.updateDisqusFrameHeight();
        }
    }

    bindEventListeners() {
        if (!this.checkNodes()) {
            return;
        }

        if (this.commentsToggle && this.commentsToggle.hasOwnProperty('removeEventListener')) {
            this.commentsToggle.removeEventListener('click', false);
        }
        this.commentsToggle.addEventListener('click', (e) => this.toggleComments(e), false);
    }

    unbindEventListeners() {
        if (!this.checkNodes()) {
            return;
        }

        if (this.commentsToggle && this.commentsToggle.hasOwnProperty('removeEventListener')) {
            this.commentsToggle.removeEventListener('click', false);
        }
    }
}
