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
        var time = this.parseDatetime();
        if (time === null) {
            this.message.author.sendMessage(INVALID_FORMAT_REPLY);
            return;
        }
        this.scheduleScrim(time);
    }
    scheduleScrim(time) {
        var scrim = scrimbot_1.default.scrimManager.createScrim(time, this.message.author);
        this.notifyScrimCreation(scrim);
    }
    parseDatetime() {
        var timeString = this.commandParts.slice(1).join(' ');
        if (timeString.length < 1) {
            return null;
        }
        return new Date(chrono.parseDate(timeString));
    }
    notifyScrimCreation(scrim) {
        var timeFormatted = utils_1.formatDatetime(scrim.startingTime);
        var guild = "__Direct message__";
        if (this.message.guild) {
            guild = this.message.guild.name;
        }
        var creationAnnouncement = `
**Scrim available at ${timeFormatted}**.

${this.command}

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
