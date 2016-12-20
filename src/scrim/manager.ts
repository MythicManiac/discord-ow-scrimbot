import { DatabaseObjectManager } from '../database'
import { Scrim } from '.'

export class ScrimManager extends DatabaseObjectManager<Scrim> {
  constructor() {
    super(Scrim)
  }
}
