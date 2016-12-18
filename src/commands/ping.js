"use strict";
class PingCommand {
    constructor() {
        this.name = 'ping';
        this.action = function (message, command) {
            message.reply('pong');
        };
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PingCommand;
