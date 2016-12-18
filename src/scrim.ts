export default class Scrim {
  id: number
  startingTime: Date
  author: any
  messages: any[]

  constructor(id: number, time: Date, author: any) {
    this.id = id
    this.startingTime = time
    this.author = author
  }
}
