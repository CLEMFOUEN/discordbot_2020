const { MessageEmbed } = require("discord.js");

module.exports = async (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#35f092")
    .setFooter("Un utilisateur a rejoint")
    .setTimestamp();

  client.channels.cache.get('705055460255989841').send(embed);

  await client.createUser({
    guildID: member.guild.id,
    guildName: member.guild.name,
    userID: member.id,
    username: member.user.tag,
  });
}