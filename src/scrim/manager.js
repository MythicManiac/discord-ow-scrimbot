"use strict";
const scrim_1 = require("../scrim");
const database_1 = require("../database");
class ScrimManager extends database_1.DatabaseObjectManager {
    createScrim(time, author) {
        var scrim = new scrim_1.Scrim(time, author);
        this.objects.add(scrim);
        return scrim;
    }
}
exports.ScrimManager = ScrimManager;
