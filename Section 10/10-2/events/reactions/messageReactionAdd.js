module.exports = async (client, messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === '708593997890977823');
  const lapinRole = message.guild.roles.cache.get("708603873618821121");
  const wahRole = message.guild.roles.cache.get("708603902378901514");
  if (member.user.bot) return;

  if (messageReaction.partial) {
    await messageReaction.fetch();
    return;
  }

  if (["laphello", "waaaah"].includes(emoji) && message.channel.id === channel.id) {
    switch (emoji) {
      case "laphello":
        member.roles.add(lapinRole);
        message.channel.send(`Le rôle ${lapinRole.name} a été ajouté avec succès!`);
        break;
      case "waaaah":
        member.roles.add(wahRole);
        message.channel.send(`Le rôle ${wahRole.name} a été ajouté avec succès!`);
        break;
    };
  };
}