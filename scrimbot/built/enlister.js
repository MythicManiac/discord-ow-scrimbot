"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_harmony_1 = require("discord-harmony");
class Enlister extends discord_harmony_1.DatabaseObject {
    constructor() {
        super(...arguments);
        this.timezoneOffset = undefined;
        this.region = undefined;
    }
}
exports.Enlister = Enlister;
