import { DatabaseObject } from '..'

export class ObjectManager<T extends DatabaseObject> {
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
    object._id = this._runningId
    object._manager = this
    this._runningId += 1
  }

  remove(object: T) {
    this.removeById(object.id)
  }

  removeById(id: number) {
    if(!Number.isSafeInteger(id)) {
      throw new Error(`Attempt to delete object by invalid ID: ${id}`)
    }
    delete this._objects[id]
  }
}

export abstract class DatabaseObjectManager<T extends DatabaseObject> {
  public objects: ObjectManager<T> = new ObjectManager<T>()
}
