"use strict";
const database_1 = require("./database");
class Enlister extends database_1.DatabaseObject {
    constructor() {
        super(...arguments);
        this.timezoneOffset = undefined;
        this.region = undefined;
    }
}
exports.Enlister = Enlister;
