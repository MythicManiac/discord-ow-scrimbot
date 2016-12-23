import { DatabaseObjectManager } from 'discord-harmony'
import { User } from '.'

export class UserManager extends DatabaseObjectManager<User> {
  constructor() {
    super(User)
  }
}
