const config = require('../config.json')

import * as Harmony from 'discord-harmony'
import { Database } from 'basie'
import { Scrim } from './scrim'

import {
  PingCommand,
  ScrimCommand,
  AcceptCommand,
  CancelCommand
} from './commands'

class Athena extends Harmony.Bot {
  loadCommands() {
    super.loadCommands()
    this.commandManager.addCommand('ping', PingCommand)
    this.commandManager.addCommand('scrim', ScrimCommand)
    this.commandManager.addCommand('accept', AcceptCommand)
    this.commandManager.addCommand('cancel', CancelCommand)
  }
}

async function loadDatabase() {
  await Database.connect('./storage.db')
  await Scrim.createTable()
}

const instance = new Athena()
export default instance as Athena

loadDatabase().then(() => {
  instance.start(config.token)
})
