const config = require('./config.json')
const Discord = require('discord.js')

import { Database } from './src/database'
import { CommandManager } from './src/command'
import { ScrimManager } from './src/scrim'

import {
  PingCommand,
  ScrimCommand,
  AcceptCommand
} from './src/commands'

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
    this.commandManager.addCommand('accept', AcceptCommand)
  }
}

const instance = new ScrimBot()
instance.load()
instance.start()

export default instance as ScrimBot
