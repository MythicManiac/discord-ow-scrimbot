"use strict";
const chrono = require("chrono-node");
const utils_1 = require("../utils");
const command_1 = require("../command");
const scrimbot_1 = require("../../scrimbot");
const INVALID_FORMAT_REPLY = 'Please use the proper command format. \
```!scrim <time> [extra details]``` \
Example usage: \
```!scrim in 2 hours 4k+ only please```';
class ScrimCommand extends command_1.Command {
    execute() {
        if (this.argString.length < 1) {
            this.message.author.sendMessage(INVALID_FORMAT_REPLY);
            return;
        }
        var time = new Date(chrono.parseDate(this.argString));
        var scrim = scrimbot_1.default.scrimManager.createScrim(time, this.message.author);
        this.notifyScrimCreation(scrim);
    }
    notifyScrimCreation(scrim) {
        var timeFormatted = utils_1.formatDatetime(scrim.startingTime);
        var guild = "__Direct message__";
        if (this.message.guild) {
            guild = this.message.guild.name;
        }
        var creationAnnouncement = `
**Scrim available at ${timeFormatted}**.

${this.argString}

Creator: **${this.message.author.username}**
Origin: ${guild}

__To accept this scrim, PM scrimbot with__ \`!accept ${scrim.id}\`
`;
        var creationPrivateNotify = `
**Scrim request listed for ${timeFormatted}**

To cancel the request, PM scrimbot with \`!cancel ${scrim.id}\`
`;
        this.message.author.sendMessage(creationPrivateNotify);
        this.message.channel.sendMessage(creationAnnouncement);
    }
}
exports.ScrimCommand = ScrimCommand;
