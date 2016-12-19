"use strict";
const command_1 = require("../command");
class PingCommand extends command_1.Command {
    execute() {
        this.message.reply('pong');
    }
}
exports.PingCommand = PingCommand;
