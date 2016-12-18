const config = require('./config.json');
import Discord = require('discord.js');
import PingCommand from './src/commands/ping';
import ScrimCommand from './src/commands/scrim';
import CommandManager from './src/commandManager';

let client = new Discord.Client();
let commandManager = new CommandManager(client);

loadCommands();
start();

function start() {
  client.on('ready', () => console.log('Scrimbot ready'));
  client.on('message', message => commandManager.processMessage(message));
  client.login(config.token);
}

function loadCommands() {
  console.log('Loading commands...');
  commandManager.addCommand(new PingCommand());
  commandManager.addCommand(new ScrimCommand());
  console.log('Done loading commands!');
}