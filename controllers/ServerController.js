"use strict";
const net = require("net");

class Server {
    constructor(instances, protocol, port, host) {
        this.port = port || 7666;
        this.host = host || "127.0.0.1";
        this.instances = instances || {};
        this.protocol = protocol || {};
    }

    init() {
        let server = this;

        let onClientConnected = sock => {
            let clientName = `${sock.remoteAddress}:${sock.remotePort}`;
            console.log(`new client connected: ${clientName}`);

            sock.on("data", data => {
                this.protocol.reciever(data);
            });

            sock.on("close", () => {
                console.log(`connection from ${clientName} closed`);
            });

            sock.on("error", err => {
                console.log(`Connection ${clientName} error: ${err.message}`);
            });
        };

        server.connection = net.createServer(onClientConnected);

        server.connection.listen(this.port, this.host, () => {
            console.log(`Server started at: ${this.host}:${this.port}`);
        });
    }
}

module.exports = Server;
