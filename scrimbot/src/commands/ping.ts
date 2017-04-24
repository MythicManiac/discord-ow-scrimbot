import { Command } from 'discord-harmony'

export class PingCommand extends Command {
  async execute() {
    this.message.reply(`pong ${this.args}`)
  }
}
