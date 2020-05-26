module.exports = client => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.cache.get('714794740100366406').send("Le bot est opérationnel!");
  client.user.setPresence({ activity: { name: 'with Alex', type: 'PLAYING' }, status: 'dnd' });
}