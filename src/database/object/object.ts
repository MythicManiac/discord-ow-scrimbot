import { ObjectManager } from './manager'

export abstract class DatabaseObject {
  _id: number
  _manager: ObjectManager<any>

  get id(){
    return this._id
  }

  delete() {
    this._manager.remove(this)
  }
}
