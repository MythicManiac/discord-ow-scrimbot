"use strict";
let COMMAND_IDENTIFIER = '!';
class CommandManager {
    constructor(discordClient) {
        this.commands = [];
        this.discordClient = discordClient;
    }
    processMessage(message) {
        if (!message.content.startsWith(COMMAND_IDENTIFIER)) {
            return;
        }
        var content = message.content.slice(COMMAND_IDENTIFIER.length);
        if (content.length < 1) {
            return;
        }
        var commandParts = content.split(' ');
        var command = commandParts[0];
        if (command in this.commands) {
            this.commands[command].action(message, commandParts, content);
        }
    }
    addCommand(command) {
        if (command.name in this.commands) {
            throw new Error('Command with this name already exists');
        }
        this.commands[command.name] = command;
        console.log('Loaded command: ' + command.name);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommandManager;
