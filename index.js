"use strict";
var config = require('./config.json');
var Discord = require("discord.js");
var ping_1 = require("./src/commands/ping");
var commandManager_1 = require("./src/commandManager/commandManager");
var client = new Discord.Client();
var commandManager = new commandManager_1.default();
loadCommands();
start();
function start() {
    client.on('ready', function () { return console.log('Scrimbot ready'); });
    client.on('message', function (message) { return commandManager.processMessage(message); });
    client.login(config.token);
}
function loadCommands() {
    console.log('Loading commands...');
    commandManager.addCommand(new ping_1.default());
    console.log('Done loading commands!');
}
