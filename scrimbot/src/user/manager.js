"use strict";
const discord_harmony_1 = require("discord-harmony");
const _1 = require(".");
class UserManager extends discord_harmony_1.DatabaseObjectManager {
    constructor() {
        super(_1.User);
    }
}
exports.UserManager = UserManager;
