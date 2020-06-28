const { ErelaClient } = require("erela.js");

module.exports = client => {
  console.log(`${client.user.tag} observe les ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} utilisateurs du serveur!`);
  client.channels.cache.get('716236393445326888').send("Le bot est opérationnel!");

  let activities = ['?help', `avec ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} utilisateurs`, 'avec Alex', 'avec Justine', `sur ${client.guilds.cache.size.toString()}`], i = 0;

  setInterval(() => client.user.setPresence({ activity: { name: `${activities[i++ % activities.length]}`, type: 'PLAYING' }, status: 'dnd' }), 3000);

  // Musique

  client.music = new ErelaClient(client, [
    {
      host: client.config.LAVALINK_HOST,
      port: client.config.LAVALINK_PORT,
      password: client.config.LAVALINK_PASSWORD
    }
  ]);

  client.music.on("nodeConnect", node => console.log("New node connected"));
  client.music.on("nodeError", (node, error) => console.log(`Node error: ${error.message}`));
  client.music.on("trackStart", (player, track) => player.textChannel.send(`Musique en train de jouer: ${track.title}`));
  client.music.on("queueEnd", player => {
      player.textChannel.send("La queue est terminée, déconnection...")
      client.music.players.destroy(player.guild.id);
  });
}