let self = {};

self.Client = {
    LoginExistingAcc: 100
};

self.Server = {};

self.generateStringPackage = obj => {
    let byId = {};
    Object.keys(obj).map(o => {
        byId[obj[o]] = o;
    });

    return { ...obj, ...byId };
};

module.exports = self;
