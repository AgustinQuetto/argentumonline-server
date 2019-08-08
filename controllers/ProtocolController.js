"use strict";
const packages = require("../config/packages.js");

class ProtocolController {
    constructor(bufferController) {
        this.instance = false;
        this.buffer = bufferController;
    }

    setInstances(instances) {
        this.instance = instances;
    }

    reciever(data) {
        data = this.buffer.fromBuffer(data);
        const packageID = data.readStringNT().charCodeAt();
        data.readStringNT();
        switch (packageID) {
            case 100:
                this.instance.Account.login(data);
                break;
            default:
                console.log("PackageId undefined: " + packageId);
                break;
        }
    }
}

module.exports = ProtocolController;
