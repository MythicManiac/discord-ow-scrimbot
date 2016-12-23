"use strict";
const discord_harmony_1 = require("discord-harmony");
const scrimbot_1 = require("../scrimbot");
class CancelCommand extends discord_harmony_1.Command {
    execute() {
        if (!this.validateArgs()) {
            return;
        }
        var scrim = scrimbot_1.default.scrimManager.objects.getById(this.args[0]);
        if (scrim === undefined) {
            this.message.reply('Invalid scrim ID');
        }
        else if (scrim.author != this.message.author) {
            this.message.author.sendMessage("You can only cancel your own scrims");
        }
        else {
            scrim.delete();
            scrim.author.sendMessage('Scrim successfully cancelled!');
        }
    }
    validateArgs() {
        var error;
        if (this.args.length < 1) {
            error = 'Not enough arguments';
        }
        this.args[0] = Number(this.args[0]);
        if (!Number.isSafeInteger(this.args[0])) {
            error = `Submission is not a number: ${this.args[0]}`;
        }
        if (error) {
            this.message.reply(error);
            return false;
        }
        return true;
    }
}
exports.CancelCommand = CancelCommand;
