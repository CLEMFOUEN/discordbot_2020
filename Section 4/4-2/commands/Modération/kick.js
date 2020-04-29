module.exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let reason = args.splice(1).join(' ');
  user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur n'existe pas.");
};

module.exports.help = {
  name: "kick",
  aliases: ['kick'],
  description: "Kick un utilisateur",
  cooldown: 10,
  usage: '<user> <raison>',
  isUserAdmin: true,
  permissions: true,
  args: true
};
