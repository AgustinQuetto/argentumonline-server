"use strict";
const PORT = 7666;
const HOST = "0.0.0.0";

const packages = require("./config/packages");
packages.Client = packages.generateStringPackage(packages.Client);
packages.Server = packages.generateStringPackage(packages.Server);

const BufferController = require("./controllers/BufferController");
const BufferInstance = new BufferController();

const ProtocolController = require("./controllers/ProtocolController");
const ProtocolInstance = new ProtocolController(BufferInstance);

const AccountController = require("./controllers/AccountController");
const AccountInstance = new AccountController(ProtocolInstance);

const instances = {
    Account: AccountInstance
};

ProtocolInstance.setInstances(instances);

const Server = require("./controllers/ServerController.js");
const server = new Server(instances, ProtocolInstance, PORT, HOST);
server.init();
