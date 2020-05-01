const { MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first());
  let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

  if (!muteRole) {
    try {
      muteRole = await message.guild.roles.create({
        data: {
          name: 'muted',
          color: '#000',
          permissions: []
        }
      });

      message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.updateOverwrite(muteRole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          CONNECT: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  };

  let muteTime = (args[1] || '60s');
  await user.roles.add(muteRole.id);
  message.channel.send(`<@${user.id}> est muté pour ${ms(ms(muteTime))}.`);

  setTimeout(() => {
    user.roles.remove(muteRole.id);
  }, ms(muteTime));

  const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`)
    .setColor("#ffa500")
    .setDescription(`**Action**: mute\n**Temps**: ${ms(ms(muteTime))}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());
    
  client.channels.cache.get('705055460255989841').send(embed);
};

module.exports.help = {
  name: "mute",
  aliases: ['mute'],
  description: "Mute un utilisateur",
  cooldown: 10,
  usage: '<@user> <time>',
  isUserAdmin: true,
  permissions: true,
  args: true
};
