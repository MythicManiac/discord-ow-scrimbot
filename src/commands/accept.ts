import { Command } from '../command'
import ScrimBot from '../../scrimbot'

export class AcceptCommand extends Command {
  execute() {
    if(!this.validateArgs()) {
      return
    }
    var scrim = ScrimBot.scrimManager.objects.getById(this.args[0])
    if(scrim === undefined) {
      this.message.reply('Invalid scrim ID')
    } else {
      scrim.author.sendMessage('Your scrim has been accepted!')
    }
  }

  validateArgs() {
    this.args[0] = Number(this.args[0])
    var error: string
    if(this.args.length < 1) {
      error = 'Not enough arguments'
    }
    if(!Number.isSafeInteger(this.args[0])) {
      error = `Submission is not a number: ${this.args[0]}`
    }

    if(error) {
      this.message.reply(error)
      return false
    }
    return true
  }
}
