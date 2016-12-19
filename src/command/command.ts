export abstract class Command {
  protected message: any
  protected commandParts: string[]
  protected command: string

  constructor(message: any, commandParts: string[], command: string) {
    this.message = message
    this.commandParts = commandParts
    this.command = command
  }

  public abstract execute() : void
};
export default Command
