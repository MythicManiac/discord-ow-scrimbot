"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_harmony_1 = require("discord-harmony");
const scrim_1 = require("../scrim");
class AcceptCommand extends discord_harmony_1.Command {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.validateArgs())
                return;
            let scrim = yield scrim_1.Scrim.findBy({ uniqueId: this.args[0] });
            if (!scrim) {
                this.message.reply('Invalid scrim ID');
                return;
            }
            let author = yield scrim.getAuthor();
            if (author == this.message.author) {
                this.message.author.sendMessage("You can't accept your own scrim");
            }
            else {
                author.sendMessage('Your scrim has been accepted!');
            }
        });
    }
    validateArgs() {
        var error;
        if (this.args.length < 1) {
            error = 'Not enough arguments';
        }
        let parts = this.args[0].split('-');
        parts.forEach((entry) => {
            if (entry.match(/^[0-9]+$/) == null) {
                error = `Submission not in proper format: ${this.args[0]}`;
            }
        });
        if (error) {
            this.message.reply(error);
            return false;
        }
        return true;
    }
}
exports.AcceptCommand = AcceptCommand;
