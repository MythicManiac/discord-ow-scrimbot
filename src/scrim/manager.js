"use strict";
const scrim_1 = require("./scrim");
class ScrimManager {
    constructor() {
        this.scrims = [];
        this.runningId = 0;
    }
    createScrim(time, author) {
        var id = this.runningId;
        var scrim = new scrim_1.Scrim(id, time, author);
        this.scrims[id] = scrim;
        this.runningId += 1;
        return scrim;
    }
}
exports.ScrimManager = ScrimManager;
