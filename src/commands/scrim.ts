import Command from '../command'
import chrono = require('chrono-node')
import formatDatetime from '../utils'

const INVALID_FORMAT_REPLY =
'Please use the proper command format. \
```!scrim <time> [extra info]``` \
Example usage: \
```!scrim today 16:30 high```';

export default class ScrimCommand extends Command {
  execute() {
    var time = this.parseDatetime()
    if(time === null) {
      this.message.author.sendMessage(INVALID_FORMAT_REPLY)
      return;
    }
    this.notifyScrimCreation(time)
  }

  parseDatetime(): Date {
    var timeString = this.commandParts.slice(1).join(' ')
    if(timeString.length < 1) {
      return null
    }
    return new Date(chrono.parseDate(timeString))
  }

  notifyScrimCreation(time): void {
    var timeFormatted =  formatDatetime(time)
    var guild = "__Direct message__"
    if(this.message.guild) {
      guild = this.message.guild.name
    }
    var scrimId = 42;
    var creationAnnouncement = `
**Scrim available at ${timeFormatted}**.

Creator: ${this.message.author.username}
Command: ${this.command}
Origin: ${guild}
Timezone: Unknown

**To accept this scrim, PM scrimbot with** \`!accept ${scrimId}\`
`
    var creationPrivateNotify = `
**Scrim request listed for ${timeFormatted}**

To cancel the request, PM scrimbot with \`!cancel ${scrimId}\`
`
    this.message.author.sendMessage(creationPrivateNotify)
    this.message.channel.sendMessage(creationAnnouncement)
  }
}
