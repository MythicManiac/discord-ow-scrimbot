"use strict";
const discord_harmony_1 = require("discord-harmony");
class PingCommand extends discord_harmony_1.Command {
    execute() {
        this.message.reply(`pong ${this.args}`);
    }
}
exports.PingCommand = PingCommand;
