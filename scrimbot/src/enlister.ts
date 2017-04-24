import { Basie, Based, field } from 'basie'

export abstract class EnlisterModel extends Basie {
  @field
  timezoneOffset: number = undefined

  @field
  region: string = undefined
}
export const Enlister = Based(EnlisterModel)
