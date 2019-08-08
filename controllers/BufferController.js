"use strict";
const SmartBuffer = require("smart-buffer").SmartBuffer;

class BufferController {
    constructor() {}

    fromBuffer(data) {
        return SmartBuffer.fromBuffer(data);
    }

    getPackageId(data) {
        return data.readStringNT().charCodeAt();
    }

    getLoginBuffer(data) {
        const account = data.readStringNT();
        const password = data.readStringNT();

        return {
            account: account,
            password: password
        };
    }

    setLoginBuffer(data) {}
}

module.exports = BufferController;
