"use strict";

class AccountController {
    constructor(protocol) {
        this.protocol = protocol;
    }

    login(data) {
        data = this.protocol.buffer.getLoginBuffer(data);
        console.log(data);
    }
}

module.exports = AccountController;
