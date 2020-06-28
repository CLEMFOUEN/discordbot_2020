const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  const voiceChannel = message.member.voice.channel;
  const q = args.join(' ');

  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription(`Voici les 5 premières recherches pour \`${q}\`:`);

  if (voiceChannel) {
    const player = client.music.players.spawn({
      guild: message.guild,
      voiceChannel: voiceChannel,
      textChannel: message.channel,
    });

    client.musicPlayer.set(message.guild.id, player);

    try {
      let trackNumber = 0;
      const musicSearchResults = await client.music.search(q, message.author);
      const tracks = await musicSearchResults.tracks.slice(0, 5);
      tracks.map(r => embed.addField(`${++trackNumber}. ${r.title}`, `${r.uri}`));
      message.channel.send(embed);

      const filter = m => (message.author.id === m.author.id) && (m.content >= 1 && m.content <= tracks.length);
      const userEntry = await message.channel.awaitMessages(filter, {
        max: 1, time: 20000, errors: ['time']
      });

      if (userEntry) {
        const firstUserEntry = userEntry.first().content;
        const musicPlayer = client.musicPlayer.get(message.guild.id);
        const track = tracks[firstUserEntry-1];
        await musicPlayer.queue.add(track);
        message.channel.send(`${track.title} a été ajouté à la queue!`);
        if (!musicPlayer.playing) musicPlayer.play();
      }
    } catch (e) {
      console.log(e);
      message.channel.send("Problème avec le client, essayer à nouveau!");
    }
  } else {
    message.channel.send("Veuillez rejoindre un salon vocal!");
  }
};

module.exports.help = MESSAGES.COMMANDS.MUSIC.PLAY;
