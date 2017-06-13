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
const chrono = require("chrono-node");
const utils_1 = require("../utils");
const discord_harmony_1 = require("discord-harmony");
const scrim_1 = require("../scrim");
const INVALID_FORMAT_REPLY = 'Please use the proper command format. \
```!scrim <time> [extra details]``` \
Example usage: \
```!scrim in 2 hours 4k+ only please```';
class ScrimCommand extends discord_harmony_1.Command {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.argString.length < 1) {
                this.message.author.sendMessage(INVALID_FORMAT_REPLY);
                return;
            }
            var time = new Date(chrono.parseDate(this.argString));
            var scrim = new scrim_1.Scrim();
            scrim.setInitials(this.message);
            scrim.startingTime = time;
            scrim.save();
            yield this.notifyScrimCreation(scrim);
        });
    }
    notifyScrimCreation(scrim) {
        return __awaiter(this, void 0, void 0, function* () {
            var timeFormatted = utils_1.formatDatetime(scrim.startingTime);
            var guild = "__Direct message__";
            if (this.message.guild) {
                guild = this.message.guild.name;
            }
            let publicMessage = `
**Scrim available at ${timeFormatted}**.

${this.args.join(" ")}

Creator: **${this.message.author.username}**
Origin: ${guild}

__To accept this scrim, PM Athena with__ \`!accept ${scrim.uniqueId}\`
`;
            let privateMessage = `
**Scrim request listed for ${timeFormatted}**

To cancel the request, PM Athena with \`!cancel ${scrim.uniqueId}\`
`;
            this.sendResponse(publicMessage, false);
            this.sendResponse(privateMessage, true);
        });
    }
}
exports.ScrimCommand = ScrimCommand;
