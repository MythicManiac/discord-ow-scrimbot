const config = require('./config.json')
import Discord = require('discord.js')

import CommandManager from './src/commandManager'
import ScrimManager from './src/ScrimManager'
import Database from './src/database'

import PingCommand from './src/commands/pingCommand'
import ScrimCommand from './src/commands/scrimCommand'

class ScrimBot {
  client: any
  scrimManager: ScrimManager
  commandManager: CommandManager
  database: Database

  constructor() {
    this.client = new Discord.Client()
    this.scrimManager = new ScrimManager()
    this.commandManager = new CommandManager()
    this.database = new Database()
  }

  load() {
    this.loadDatabase()
    this.loadCommands()
  }

  start() {
    this.client.on('ready', () => console.log('Scrimbot ready'))
    this.client.on('message', message => this.commandManager.processMessage(message))
    this.client.login(config.token)
  }

  loadDatabase() {
    this.database.load(config.storagePath)
  }

  loadCommands() {
    console.log('Loading commands...')
    this.commandManager.addCommand('ping', PingCommand)
    this.commandManager.addCommand('scrim', ScrimCommand)
  }
}

const instance = new ScrimBot()
instance.load()
instance.start()

export default instance as ScrimBot
