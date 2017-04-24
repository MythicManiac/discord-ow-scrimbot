import { Command } from 'discord-harmony'
import { Scrim } from '../scrim'

export class AcceptCommand extends Command {
  async execute() {
    if(!this.validateArgs()) return

    let scrim = await Scrim.findBy({uniqueId: this.args[0]})
    if(!scrim) {
      this.message.reply('Invalid scrim ID')
      return
    }

    let author = await scrim.getAuthor()

    if (author == this.message.author ) {
      this.message.author.sendMessage("You can't accept your own scrim")
    } else {
      author.sendMessage('Your scrim has been accepted!')
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
