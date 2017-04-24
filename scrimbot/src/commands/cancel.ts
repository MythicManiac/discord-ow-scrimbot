import { Command } from 'discord-harmony'
import { Scrim } from '../scrim'

export class CancelCommand extends Command {
  async execute() {
    if(!this.validateArgs()) return

    let scrim = await Scrim.findBy({uniqueId: this.args[0]})
    let author = await scrim.getAuthor()

    if(scrim === undefined) {
      this.message.reply('Invalid scrim ID')
    } else if (author != this.message.author ) {
      this.message.author.sendMessage("You can only cancel your own scrims")
    } else {
      scrim.destroy()
      author.sendMessage('Scrim successfully cancelled!')
    }
  }

  validateArgs() {
    var error: string
    if(this.args.length < 1) {
      error = 'Not enough arguments'
    }
    let parts = this.args[0].split('-')
    parts.forEach((entry: string) => {
      if(entry.match(/^[0-9]+$/) == null) {
        error = `Submission not in proper format: ${this.args[0]}`
      }
    })

    if(error) {
      this.message.reply(error)
      return false
    }
    return true
  }
}
