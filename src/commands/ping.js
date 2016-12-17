"use strict";
var PingCommand = (function () {
    function PingCommand() {
        this.name = "ping";
        this.action = function (message) {
            message.reply("pong");
        };
    }
    return PingCommand;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PingCommand;
