"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require('../config.json');
const Harmony = require("discord-harmony");
const scrim_1 = require("./scrim");
const commands_1 = require("./commands");
class ScrimBot extends Harmony.Bot {
    constructor() {
        super();
        this.scrimManager = new scrim_1.ScrimManager();
    }
    loadCommands() {
        super.loadCommands();
        this.commandManager.addCommand('ping', commands_1.PingCommand);
        this.commandManager.addCommand('scrim', commands_1.ScrimCommand);
        this.commandManager.addCommand('accept', commands_1.AcceptCommand);
        this.commandManager.addCommand('cancel', commands_1.CancelCommand);
    }
}
const instance = new ScrimBot();
instance.loadDatabase(config.storagePath);
instance.start(config.token);
exports.default = instance;
