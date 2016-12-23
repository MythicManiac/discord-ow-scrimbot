import { DatabaseObjectManager } from 'discord-harmony'
import { Scrim } from '.'

export class ScrimManager extends DatabaseObjectManager<Scrim> {
  constructor() {
    super(Scrim)
  }
}
