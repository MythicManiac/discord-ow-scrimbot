import { DatabaseObject } from '../database'

export class Scrim extends DatabaseObject {
  startingTime: Date
  author: any
  messages: any[]

  constructor(time: Date, author: any) {
    super()
    this.startingTime = time
    this.author = author
  }
}
