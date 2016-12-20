"use strict";
class DatabaseObject {
    get id() {
        return this._id;
    }
    delete() {
        this._manager.remove(this);
    }
}
exports.DatabaseObject = DatabaseObject;
