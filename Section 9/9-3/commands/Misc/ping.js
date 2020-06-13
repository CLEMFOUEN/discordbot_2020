const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  const msg = await message.channel.send("Ping!");
  msg.edit(
    `Pong!
    Latence du bot: ${msg.createdTimestamp - message.createdTimestamp}ms
    Latence de l'API: ${Math.round(client.ws.ping)}ms`
  )
};

module.exports.help = MESSAGES.COMMANDS.MISC.PING;
