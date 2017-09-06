import {ME} from './me';

const MODULE_NAME = 'solitude.me.service';

/**
* The MeService class manages the retrieval of additional
* data for the primary owner of the blog (e.g., 'me'). This
* implementation is a basic way to configure additional pieces
* of user data without having to hard-code values into the
* templates. When/if ghost provides more granular storage
* of user profiles this implementation can be removed.
*/
export class MeService {
    constructor() {
        this._me = ME;
    }

    getMe(key) {
        let response = {};

        if (key && this._me.hasOwnProperty(key)) {
            response = this._me[key];
        } else {
            response = this._me;
        }

        return response;
    }
}
