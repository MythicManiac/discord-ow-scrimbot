"use strict";
const database_1 = require("../database");
class Scrim extends database_1.DatabaseObject {
    constructor(time, author) {
        super();
        this.startingTime = time;
        this.author = author;
    }
}
exports.Scrim = Scrim;
