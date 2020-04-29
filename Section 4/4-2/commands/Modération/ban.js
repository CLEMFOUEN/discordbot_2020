module.exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée');
  user ? message.guild.member(user).ban(reason) : message.channel.send("L'utilisateur n'existe pas.");
};

module.exports.help = {
  name: "ban",
  aliases: ['ban'],
  description: "Ban un utilisateur",
  cooldown: 10,
  usage: '<user> <raison>',
  isUserAdmin: true,
  permissions: true,
  args: true
};
