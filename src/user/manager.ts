import { DatabaseObjectManager } from '../database'
import { User } from '.'

export class UserManager extends DatabaseObjectManager<User> {
  constructor() {
    super(User)
  }
}
