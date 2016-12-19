import { Scrim } from './scrim'

export class ScrimManager {
  scrims: Scrim[]
  runningId: number

  constructor() {
    this.scrims = []
    this.runningId = 0
  }

  createScrim(time: Date, author: any): Scrim {
    var id = this.runningId
    var scrim = new Scrim(id, time, author)
    this.scrims[id] = scrim
    this.runningId += 1
    return scrim
  }
}
