module.exports = client => {
  console.log(`${client.user.tag} observe les ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} utilisateurs du serveur!`);
  client.channels.cache.get('716236393445326888').send("Le bot est opérationnel!");

  let activities = ['?help', `avec ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} utilisateurs`, 'avec Alex', 'avec Justine', `sur ${client.guilds.cache.size.toString()}`], i = 0;

  // setInterval(() => client.user.setPresence({ activity: { name: `${activities[Math.floor(Math.random() * activities.length)]}`, type: 'PLAYING' }, status: 'dnd' }), 3000); 

  setInterval(() => client.user.setPresence({ activity: { name: `${activities[i++ % activities.length]}`, type: 'PLAYING' }, status: 'dnd' }), 3000);
}