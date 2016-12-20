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
        object._id = this._runningId;
        object._manager = this;
        this._runningId += 1;
    }
    remove(object) {
        this.removeById(object.id);
    }
    removeById(id) {
        if (!Number.isSafeInteger(id)) {
            throw new Error(`Attempt to delete object by invalid ID: ${id}`);
        }
        delete this._objects[id];
    }
}
exports.ObjectManager = ObjectManager;
class DatabaseObjectManager {
    constructor() {
        this.objects = new ObjectManager();
    }
}
exports.DatabaseObjectManager = DatabaseObjectManager;
