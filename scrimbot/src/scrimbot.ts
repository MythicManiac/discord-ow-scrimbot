const config = require('../config.json')

import * as Harmony from 'discord-harmony'
import { ScrimManager } from './scrim'

import {
  PingCommand,
  ScrimCommand,
  AcceptCommand,
  CancelCommand
} from './commands'

class ScrimBot extends Harmony.Bot {
  client: any
  scrimManager: ScrimManager

  constructor() {
    super()
    this.scrimManager = new ScrimManager()
  }

  loadCommands() {
    super.loadCommands()
    this.commandManager.addCommand('ping', PingCommand)
    this.commandManager.addCommand('scrim', ScrimCommand)
    this.commandManager.addCommand('accept', AcceptCommand)
    this.commandManager.addCommand('cancel', CancelCommand)
  }
}

const instance = new ScrimBot()
instance.loadDatabase(config.storagePath)
instance.start(config.token)
export default instance as ScrimBot
