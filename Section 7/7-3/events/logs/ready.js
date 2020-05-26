module.exports = client => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.cache.get('713358475018764369').send("Le bot est opérationnel!");
}