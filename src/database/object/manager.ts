import { DatabaseObject } from '..'

class ObjectManager {
  protected _objects: DatabaseObject[]
  protected _runningId: number

  constructor() {
    this._objects = []
    this._runningId = 1
  }

  getById(id: number) {
    return this._objects[id]
  }

  add(object: DatabaseObject) {
    if(object.id) {
      throw new Error("Object with ID already exists, possible double add?")
    }
    this._objects[this._runningId] = object
    object.id = this._runningId
    this._runningId += 1
  }
}

export abstract class DatabaseObjectManager {
  public objects: ObjectManager = new ObjectManager()
}
