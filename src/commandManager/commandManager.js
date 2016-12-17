"use strict";
var CommandManager = (function () {
    function CommandManager() {
        this.commands = [];
    }
    CommandManager.prototype.processMessage = function (message) {
        var content = message.content;
        if (content.charAt(0) !== '!') {
            return;
        }
        content = content.substr(1);
        var commandParts = content.split(' ');
        if (commandParts.length < 1) {
            return;
        }
        var command = commandParts[0];
        if (command in this.commands) {
            this.commands[command].action(message);
        }
    };
    CommandManager.prototype.addCommand = function (command) {
        if (command.name in this.commands) {
            throw new Error("Command with this name already exists");
        }
        this.commands[command.name] = command;
        console.log("Loaded command: " + command.name);
    };
    return CommandManager;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommandManager;
