import Command from "../command";

export default class PingCommand implements Command {
  name = "ping";
  action = function(message) {
    message.reply("pong");
  }
}
