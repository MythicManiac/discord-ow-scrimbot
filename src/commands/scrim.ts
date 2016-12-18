import Command from '../command';
import chrono = require('chrono-node');
import dateFormat = require('dateformat');

const INVALID_FORMAT_REPLY =
'Please use the proper command format. \
```!scrim <time> [extra info]``` \
Example usage: \
```!scrim today 16:30 high```';

function notifyScrimCreation(message, time, command): void {
  var timeFormatted =  formatDatetime(time);
  var guild = "__Direct message__"
  if(message.guild) {
    guild = message.guild.name;
  }
  var scrimId = 42;
  var creationAnnouncement = `
**Scrim available at ${timeFormatted}**.

Creator: ${message.author.username}
Command: ${command}
Origin: ${guild}
Timezone: Unknown

**To accept this scrim, PM scrimbot with** \`!accept ${scrimId}\`
`
  var creationPrivateNotify = `
**Scrim request listed for ${timeFormatted}**

To cancel the request, PM scrimbot with \`!cancel ${scrimId}\`
`
  message.author.sendMessage(creationPrivateNotify);
  message.channel.sendMessage(creationAnnouncement);
}

function formatDatetime(datetime): string {
  var hour = dateFormat(datetime, 'UTC:HH:MM');
  var date = dateFormat(datetime, 'UTC:dS mmmm');
  return `${hour} UTC on ${date}`;
}

function parseDatetime(message, commandParts): Date {
  var timeString = commandParts.slice(1).join(' ');
  if(timeString.length < 1) {
    return null;
  }
  return new Date(chrono.parseDate(timeString));
}

export default class ScrimCommand implements Command {
  name = 'scrim';
  action = function(message, commandParts: Array<string>, command) {
    var time = parseDatetime(message, commandParts);
    if(time === null) {
      message.author.sendMessage(INVALID_FORMAT_REPLY);
      return;
    }
    notifyScrimCreation(message, time, command);
  }
}
