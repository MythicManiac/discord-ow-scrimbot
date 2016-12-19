"use strict";
const config = require('./config.json');
const Discord = require('discord.js');
const database_1 = require("./src/database");
const command_1 = require("./src/command");
const scrim_1 = require("./src/scrim");
const commands_1 = require("./src/commands");
class ScrimBot {
    constructor() {
        this.client = new Discord.Client();
        this.scrimManager = new scrim_1.ScrimManager();
        this.commandManager = new command_1.CommandManager();
        this.database = new database_1.Database();
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
        this.commandManager.addCommand('ping', commands_1.PingCommand);
        this.commandManager.addCommand('scrim', commands_1.ScrimCommand);
        this.commandManager.addCommand('accept', commands_1.AcceptCommand);
    }
}
const instance = new ScrimBot();
instance.load();
instance.start();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = instance;
