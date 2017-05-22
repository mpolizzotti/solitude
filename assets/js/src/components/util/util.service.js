const MODULE_NAME = 'solitude.util.service';

/**
* The UtilService class...
*
* @class
* @type Class
* @return public API
 */
export class UtilService {
    constructor() {}

    inArray(value, array) {
        let found = false;

        array.forEach((v, idx) => {
            if (value === v) {
                found = true;
            }
        });

        return found;
    }
}
