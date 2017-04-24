import * as Discord from 'discord.js'
import { Basie, Based, field } from 'basie'

import Athena from  '../athena'

export abstract class ScrimModel extends Basie {
  @field
  startingTimestamp: number

  @field
  authorId: number

  @field
  uniqueId: string

  public get startingTime(): Date {
    return new Date(this.startingTimestamp)
  }

  public set startingTime(value: Date) {
    this.startingTimestamp = value.getTime()
  }

  public getAuthor(): Promise<Discord.User> {
    return Athena.client.fetchUser(this.authorId.toString())
  }

  private setAuthor(value: Discord.User) {
    this.authorId = parseInt(value.id)
  }

  public setInitials(creationMessage: Discord.Message) {
    if(this.uniqueId !== undefined) return
    this.setAuthor(creationMessage.author)
    this.generateId(creationMessage)
  }

  private generateId(creationMessage: Discord.Message) {
    this.uniqueId = `${creationMessage.channel.id}-${creationMessage.id}`
  }
}
export const Scrim = Based(ScrimModel)
