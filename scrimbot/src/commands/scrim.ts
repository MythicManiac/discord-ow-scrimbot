import chrono = require('chrono-node')

import { formatDatetime } from '../utils'
import { Command } from 'discord-harmony'
import { Scrim, ScrimModel } from '../scrim'

const INVALID_FORMAT_REPLY =
'Please use the proper command format. \
```!scrim <time> [extra details]``` \
Example usage: \
```!scrim in 2 hours 4k+ only please```';

export class ScrimCommand extends Command {
  async execute() {
    if(this.argString.length < 1) {
      this.message.author.sendMessage(INVALID_FORMAT_REPLY)
      return;
    }
    var time = new Date(chrono.parseDate(this.argString))
    var scrim = new Scrim()
    scrim.setInitials(this.message)
    scrim.startingTime = time
    scrim.save()
    await this.notifyScrimCreation(scrim)
  }

  async notifyScrimCreation(scrim: ScrimModel): Promise<void> {
    var timeFormatted =  formatDatetime(scrim.startingTime)
    var guild = "__Direct message__"
    if(this.message.guild) {
      guild = this.message.guild.name
    }

    let publicMessage = `
**Scrim available at ${timeFormatted}**.

${this.args.join(" ")}

Creator: **${this.message.author.username}**
Origin: ${guild}

__To accept this scrim, PM Athena with__ \`!accept ${scrim.uniqueId}\`
`
    let privateMessage = `
**Scrim request listed for ${timeFormatted}**

To cancel the request, PM Athena with \`!cancel ${scrim.uniqueId}\`
`
    this.sendResponse(publicMessage, false)
    this.sendResponse(privateMessage, true)

    //let privateNotify: Discord.Message = await this.message.author.sendMessage(privateMessage)
    //let publicNotify = await this.message.channel.sendMessage(publicMessage)
  }
}
