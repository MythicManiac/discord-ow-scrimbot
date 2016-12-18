"use strict";
const dateFormat = require("dateformat");
function formatDatetime(datetime) {
    var hour = dateFormat(datetime, 'UTC:HH:MM');
    var date = dateFormat(datetime, 'UTC:dS mmmm');
    return `${hour} UTC on ${date}`;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = formatDatetime;
