import { Scrim } from '../scrim'
import { DatabaseObjectManager } from '../database'

export class ScrimManager extends DatabaseObjectManager<Scrim> {
  createScrim(time: Date, author: any): Scrim {
    var scrim = new Scrim(time, author)
    this.objects.add(scrim)
    return scrim
  }
}
