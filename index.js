"use strict";
const config = require('./config.json');
const Discord = require("discord.js");
const commandManager_1 = require("./src/commandManager");
const ScrimManager_1 = require("./src/ScrimManager");
const database_1 = require("./src/database");
const pingCommand_1 = require("./src/commands/pingCommand");
const scrimCommand_1 = require("./src/commands/scrimCommand");
class ScrimBot {
    constructor() {
        this.client = new Discord.Client();
        this.scrimManager = new ScrimManager_1.default();
        this.commandManager = new commandManager_1.default();
        this.database = new database_1.default();
    }
    load() {
        this.loadDatabase();
        this.loadCommands();
    }
    start() {
        this.client.on('ready', () => console.log('Scrimbot ready'));
        this.client.on('message', message => this.commandManager.processMessage(message));
        this.client.login(config.token);
    }
    loadDatabase() {
        this.database.load(config.storagePath);
    }
    loadCommands() {
        console.log('Loading commands...');
        this.commandManager.addCommand('ping', pingCommand_1.default);
        this.commandManager.addCommand('scrim', scrimCommand_1.default);
    }
}
const instance = new ScrimBot();
instance.load();
instance.start();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = instance;
