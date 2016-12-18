"use strict";
const config = require('./config.json');
const Discord = require("discord.js");
const ping_1 = require("./src/commands/ping");
const scrim_1 = require("./src/commands/scrim");
const commandManager_1 = require("./src/commandManager");
let client = new Discord.Client();
let commandManager = new commandManager_1.default(client);
loadCommands();
start();
function start() {
    client.on('ready', () => console.log('Scrimbot ready'));
    client.on('message', message => commandManager.processMessage(message));
    client.login(config.token);
}
function loadCommands() {
    console.log('Loading commands...');
    commandManager.addCommand(new ping_1.default());
    commandManager.addCommand(new scrim_1.default());
    console.log('Done loading commands!');
}
