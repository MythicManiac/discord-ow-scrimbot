"use strict";
const Discord = require("discord.js");
const chrono = require("chrono-node");
const utils_1 = require("../utils");
const command_1 = require("../command");
const index_1 = require("../../index");
const embed = new Discord.RichEmbed()
    .setTitle('Very Nice Title')
    .setAuthor('Author Name', 'https://goo.gl/rHndF5')
    .setColor(0x00AE86)
    .setDescription('The text of the body, essentially')
    .setFooter('Nice text at the bottom', 'https://goo.gl/hkFYh0')
    .setImage('https://goo.gl/D3uKk2')
    .setThumbnail('https://goo.gl/lhc6ke')
    .setTimestamp()
    .setURL('https://discord.js.org/#/docs/main/indev/class/RichEmbed')
    .addField('Field Title', 'Field Value')
    .addField('Inline Field', 'Hmm 🤔', true)
    .addField('\u200b', '\u200b', true)
    .addField('Second (3rd place) Inline Field', 'I\'m in the ZOONE', true);
const INVALID_FORMAT_REPLY = 'Please use the proper command format. \
```!scrim <time> [extra details]``` \
Example usage: \
```!scrim in 2 hours 4k+ only please```';
class ScrimCommand extends command_1.default {
    execute() {
        var time = this.parseDatetime();
        if (time === null) {
            this.message.author.sendMessage(INVALID_FORMAT_REPLY);
            return;
        }
        this.scheduleScrim(time);
    }
    scheduleScrim(time) {
        var scrim = index_1.default.scrimManager.createScrim(time, this.message.author);
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
        var timeFormatted = utils_1.default(scrim.startingTime);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ScrimCommand;
