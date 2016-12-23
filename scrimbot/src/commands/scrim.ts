import chrono = require('chrono-node')

import { formatDatetime } from '../utils'
import { Command } from 'discord-harmony'
import { Scrim } from '../scrim'
import ScrimBot from '../scrimbot'

const INVALID_FORMAT_REPLY =
'Please use the proper command format. \
```!scrim <time> [extra details]``` \
Example usage: \
```!scrim in 2 hours 4k+ only please```';

export class ScrimCommand extends Command {
  execute() {
    if(this.argString.length < 1) {
      this.message.author.sendMessage(INVALID_FORMAT_REPLY)
      return;
    }
    var time = new Date(chrono.parseDate(this.argString))
    var scrim = ScrimBot.scrimManager.objects.create({
      time: time,
      author: this.message.author
    })
    this.notifyScrimCreation(scrim)
  }

  notifyScrimCreation(scrim: Scrim): void {
    var timeFormatted =  formatDatetime(scrim.startingTime)
    var guild = "__Direct message__"
    if(this.message.guild) {
      guild = this.message.guild.name
    }
    var creationAnnouncement = `
**Scrim available at ${timeFormatted}**.

${this.argString}

Creator: **${this.message.author.username}**
Origin: ${guild}

__To accept this scrim, PM scrimbot with__ \`!accept ${scrim.id}\`
`
    var creationPrivateNotify = `
**Scrim request listed for ${timeFormatted}**

To cancel the request, PM scrimbot with \`!cancel ${scrim.id}\`
`
    this.message.author.sendMessage(creationPrivateNotify)
    this.message.channel.sendMessage(creationAnnouncement)
  }
}
