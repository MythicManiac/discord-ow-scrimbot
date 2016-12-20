"use strict";
const database_1 = require("../database");
const _1 = require(".");
class ScrimManager extends database_1.DatabaseObjectManager {
    constructor() {
        super(_1.Scrim);
    }
}
exports.ScrimManager = ScrimManager;
