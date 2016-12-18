import Discord = require('discord.js')
import chrono = require('chrono-node')

import formatDatetime from '../utils'
import Command from '../command'
import Scrim from '../scrim'
import ScrimBot from '../../index'

const embed = new Discord.RichEmbed()
  .setTitle('Very Nice Title')
  .setAuthor('Author Name', 'https://goo.gl/rHndF5')
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription('The text of the body, essentially')
  .setFooter('Nice text at the bottom', 'https://goo.gl/hkFYh0')
  .setImage('https://goo.gl/D3uKk2')
  .setThumbnail('https://goo.gl/lhc6ke')
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL('https://discord.js.org/#/docs/main/indev/class/RichEmbed')
  .addField('Field Title', 'Field Value')
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField('Inline Field', 'Hmm 🤔', true)
  /*
   * Blank field, useful to create some space.
   */
  .addField('\u200b', '\u200b', true)
  .addField('Second (3rd place) Inline Field', 'I\'m in the ZOONE', true);

const INVALID_FORMAT_REPLY =
'Please use the proper command format. \
```!scrim <time> [extra details]``` \
Example usage: \
```!scrim in 2 hours 4k+ only please```';

export default class ScrimCommand extends Command {
  execute() {
    var time = this.parseDatetime()
    if(time === null) {
      this.message.author.sendMessage(INVALID_FORMAT_REPLY)
      return;
    }
    this.scheduleScrim(time)
  }

  scheduleScrim(time: Date): void {
    var scrim = ScrimBot.scrimManager.createScrim(time, this.message.author)
    this.notifyScrimCreation(scrim)
  }

  parseDatetime(): Date {
    var timeString = this.commandParts.slice(1).join(' ')
    if(timeString.length < 1) {
      return null
    }
    return new Date(chrono.parseDate(timeString))
  }

  notifyScrimCreation(scrim: Scrim): void {
    var timeFormatted =  formatDatetime(scrim.startingTime)
    var guild = "__Direct message__"
    if(this.message.guild) {
      guild = this.message.guild.name
    }
    var creationAnnouncement = `
**Scrim available at ${timeFormatted}**.

${this.command}

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
    // this.message.channel.sendEmbed(embed)
  }
}
