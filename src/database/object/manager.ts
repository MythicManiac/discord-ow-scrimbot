import { DatabaseObject } from '..'

class ObjectManager<T extends DatabaseObject> {
  protected _objects: T[]
  protected _runningId: number

  constructor() {
    this._objects = []
    this._runningId = 1
  }

  getById(id: number) {
    if(!Number.isSafeInteger(id)) {
      throw new Error(`Attempt to fetch object by invalid ID: ${id}`)
    }
    return this._objects[id]
  }

  add(object: T) {
    if(object.id) {
      throw new Error("Object with ID already exists, possible double add?")
    }
    this._objects[this._runningId] = object
    object.id = this._runningId
    this._runningId += 1
  }
}

export abstract class DatabaseObjectManager<T extends DatabaseObject> {
  public objects: ObjectManager<T> = new ObjectManager<T>()
}
