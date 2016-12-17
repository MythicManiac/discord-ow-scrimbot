import Command from "../command";

export default class CommandManager {
  commands: Array<Command>;
  constructor() {
    this.commands = [];
  }
  processMessage(message) {
    var content = <string>message.content;
    if(content.charAt(0) !== '!') {
      return;
    }
    content = content.substr(1);
    var commandParts = content.split(' ');
    if(commandParts.length < 1) {
      return;
    }
    var command = commandParts[0];
    if(command in this.commands){
      this.commands[command].action(message);
    }
  }
  addCommand(command: Command) {
    if(command.name in this.commands) {
      throw new Error("Command with this name already exists");
    }
    this.commands[command.name] = command;
    console.log("Loaded command: " + command.name);
  }
}
