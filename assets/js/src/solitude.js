/**
* Top-level class for the Solitude theme. This class bootstraps
* the required JavaScript to execute for the Solitude theme.
*
* @class
* @type Class
* @return public API
 */
export class Solitude {
    constructor() {
        this._name = 'Solitude';
        this._version = '1.0.0';
        console.log(this._name);
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get version() {
        return this._version;
    }

    set version(newVersion) {
        this._version = newVersion;
    }
}
