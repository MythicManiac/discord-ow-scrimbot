import { Command } from '../command'

export class PingCommand extends Command {
  execute() {
    this.message.reply(`pong ${this.args}`)
  }
}
