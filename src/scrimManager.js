"use strict";
const scrim_1 = require("./scrim");
class ScrimManager {
    constructor() {
        this.scrims = [];
        this.runningId = 0;
    }
    loadFromDatabase(database) {
    }
    createScrim(time, author) {
        var id = this.runningId;
        var scrim = new scrim_1.default(id, time, author);
        this.scrims[id] = scrim;
        this.runningId += 1;
        return scrim;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ScrimManager;
