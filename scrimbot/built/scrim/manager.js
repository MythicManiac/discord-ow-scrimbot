"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_harmony_1 = require("discord-harmony");
const _1 = require(".");
class ScrimManager extends discord_harmony_1.DatabaseObjectManager {
    constructor() {
        super(_1.Scrim);
    }
}
exports.ScrimManager = ScrimManager;
