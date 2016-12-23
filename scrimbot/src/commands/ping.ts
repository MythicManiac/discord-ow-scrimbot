import { Command } from 'discord-harmony'

export class PingCommand extends Command {
  execute() {
    this.message.reply(`pong ${this.args}`)
  }
}
