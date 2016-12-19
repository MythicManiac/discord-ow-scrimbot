"use strict";
class ObjectManager {
    constructor() {
        this._objects = [];
        this._runningId = 1;
    }
    getById(id) {
        if (!Number.isSafeInteger(id)) {
            throw new Error(`Attempt to fetch object by invalid ID: ${id}`);
        }
        return this._objects[id];
    }
    add(object) {
        if (object.id) {
            throw new Error("Object with ID already exists, possible double add?");
        }
        this._objects[this._runningId] = object;
        object.id = this._runningId;
        this._runningId += 1;
    }
}
class DatabaseObjectManager {
    constructor() {
        this.objects = new ObjectManager();
    }
}
exports.DatabaseObjectManager = DatabaseObjectManager;
