"use strict";
const database_1 = require("../database");
const _1 = require(".");
class UserManager extends database_1.DatabaseObjectManager {
    constructor() {
        super(_1.User);
    }
}
exports.UserManager = UserManager;
