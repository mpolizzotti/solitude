const MODULE_NAME = 'solitude.util.service';

/**
* The UtilService class provides a collection of
* useful utilty methods.
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
