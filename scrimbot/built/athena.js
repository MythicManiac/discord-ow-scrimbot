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
const config = require('../config.json');
const Harmony = require("discord-harmony");
const basie_1 = require("basie");
const scrim_1 = require("./scrim");
const commands_1 = require("./commands");
class Athena extends Harmony.Bot {
    loadCommands() {
        super.loadCommands();
        this.commandManager.addCommand('ping', commands_1.PingCommand);
        this.commandManager.addCommand('scrim', commands_1.ScrimCommand);
        this.commandManager.addCommand('accept', commands_1.AcceptCommand);
        this.commandManager.addCommand('cancel', commands_1.CancelCommand);
    }
}
function loadDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        yield basie_1.Database.connect('./storage.db');
        yield scrim_1.Scrim.createTable();
    });
}
const instance = new Athena();
exports.default = instance;
loadDatabase().then(() => {
    instance.start(config.token);
});
