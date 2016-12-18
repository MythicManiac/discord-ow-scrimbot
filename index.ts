const config = require('./config.json')
import Discord = require('discord.js')

import CommandManager from './src/commandManager'

import PingCommand from './src/commands/ping'
import ScrimCommand from './src/commands/scrim'

let client = new Discord.Client()
let commandManager = new CommandManager()


loadCommands();
start();

function start() {
  client.on('ready', () => console.log('Scrimbot ready'))
  client.on('message', message => commandManager.processMessage(message))
  client.login(config.token)
}

function loadCommands() {
  console.log('Loading commands...')
  commandManager.addCommand('ping', PingCommand)
  commandManager.addCommand('scrim', ScrimCommand)
  console.log('Done loading commands!')
}
